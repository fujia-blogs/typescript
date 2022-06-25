function reflect<P = any>(param: P) {
  return param;
}

class Memory<S> {
  store: S;

  constructor(store: S) {
    this.store = store;
  }

  set(store: S) {
    this.store = store;
  }

  get() {
    return this.store;
  }
}

const reflectFn: <P>(param: P) => P = reflect;

type StrOrNumArray<E> = E extends string | number ? E[] : E;

type MyType = StrOrNumArray<string | number>;

let big: bigint = 100n;
