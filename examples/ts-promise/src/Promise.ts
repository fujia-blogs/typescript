import { RejectType, ResolveType, StatusType, Executor } from './actionType';

export const isCPromise = (val: any): val is CPromise<any> => {
  return (
    typeof val === 'object' &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  );
};

export default class CPromise<T = any> {
  resolve!: ResolveType;
  reject!: RejectType;
  status!: StatusType;
  resolvedValue!: any;
  rejectedValue!: any;
  resolveThenCallbacks: VoidFunction[] = [];
  rejectThenCallbacks: VoidFunction[] = [];

  constructor(executor: Executor) {
    this.status = 'pending';

    this.resolve = (value: any): any => {
      if (this.status === 'pending') {
        this.status = 'fulfilled';
        this.resolvedValue = value;
        this.resolveThenCallbacks.forEach((cb) => cb?.());
      }
    };

    this.reject = (value: any): any => {
      if (this.status === 'pending') {
        this.status = 'rejected';
        this.rejectedValue = value;
        console.log('reject -> ', value);
        this.rejectThenCallbacks.forEach((cb) => cb?.());
      }
    };

    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.status = 'pending';
      this.reject(error);
      throw new Error('process exited!');
    }
  }

  then(resolveOfThen: ResolveType, rejectOfThen?: RejectType) {
    // const self = this;
    return new CPromise((resolve, reject) => {
      let res;
      if (this.status === 'fulfilled') {
        res = resolveOfThen?.(this.resolvedValue);
        resolve(res);
      }

      if (this.status === 'rejected') {
        res = rejectOfThen?.(this.rejectedValue);
        reject(res);
      }

      if (this.status === 'pending') {
        this.resolveThenCallbacks.push(() => {
          res = resolveOfThen(this.resolvedValue);

          if (isCPromise(res)) {
            res.then(
              (innerResolvedValue) => {
                resolve(innerResolvedValue);
              },
              (innerRejectValue) => {
                resolve(innerRejectValue);
              }
            );
          } else {
            resolve(res);
          }
        });

        this.rejectThenCallbacks.push(() => {
          res = rejectOfThen?.(this.rejectedValue);
          console.log('then-pending-reject: ', res);
          reject(res);
        });
      }
    });
  }

  static all(promises: CPromise[]): CPromise {
    return new CPromise((resolve, reject) => {
      const resolvedValues: any[] = [];

      promises.forEach((promise, index) => {
        promise.then(
          (value: any) => {
            resolvedValues[index] = value;

            if (index === promises.length - 1) {
              resolve(resolvedValues);
            }
          },
          (value: any) => {
            reject(value);
            return;
          }
        );
      });
    });
  }
}
