type ResolveType = (data: any) => any;
type RejectType = (data: any) => any;

class MyPromise {
  resolveFunc!: ResolveType;
  rejectFunc!: RejectType;
  constructor(param: (resolve: ResolveType, reject: RejectType) => any) {
    this.resolveFunc = (data: any): any => {
      console.log(data);
    };

    this.rejectFunc = (data: any): any => {
      console.log(data);
    };

    param(this.resolveFunc, this.rejectFunc);
  }
}

new MyPromise((resolve, reject) => {
  resolve('成功');
  reject('失败');
});
