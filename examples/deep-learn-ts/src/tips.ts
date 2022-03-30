type Id<T extends string> = {
  type: T;
  value: string;
};

type FooId = Id<'foo'>;
type BarId = Id<'bar'>;

enum FooIdBrand {
  _ = '',
}

enum FooIdBrand2 {}
type FooId2 = FooIdBrand & string;
type FooId3 = FooIdBrand2 & string;

// use interface
interface FooID extends String {
  _fooIdBrand: string; // prevent type error
}

interface BarID extends String {
  _barIdBrand: string;
}

let fooId: FooId;
let barId: BarId;

// 类型安全
// fooId = barId; // error
// barId = fooId; // error
// fooId = <FooId>barId; // error
// barId = <BarId>fooId; // error
const { called } = new (class {
  count = 0;

  called = () => {
    this.count++;
    console.log(`Called: ${this.count}`);
  };
})();

called();

function twoParams(a: number, b: number) {
  return a + b;
}

let curryOne = twoParams.bind(null, 123);

curryOne(456);

// curryOne('ddd')
class Adder {
  constructor(public a: string) {}

  add(b: string) {
    return this.a + b;
  }
}

function useAdd(add: (x: number) => number) {
  return add(456);
}

let adder = new Adder('mary had a little 🐑');
// useAdd(adder.add.bind(adder))

let add = (x: number) => (y: number) => x + y;

console.log(add(123)(456));

class MyG<T> {
  foo!: T;
}

const FooNumber = MyG as { new (): MyG<number> };
