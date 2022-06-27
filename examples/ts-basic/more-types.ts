import { first } from 'lodash';
type isChild<Child, Par> = Child extends Par ? true : false;

interface Animal {
  name: string;
}

interface Dog extends Animal {
  woof: () => void;
}

type Covariance<T> = T;

type isCovariant = isChild<Covariance<Dog>, Covariance<Animal>>;

type Contravariance<T> = (param: T) => void;

type isNotContravariance = isChild<Contravariance<Dog>, Contravariance<Animal>>;

const visitDog = (a: Dog) => {
  a.woof();
};

let animals: Animal[] = [
  {
    name: 'Cat',
    // miao: () => void 0;
  },
];

export {};

interface Event {
  timestamp: number;
}

interface MouseEvent extends Event {
  x: number;
  y: number;
}

function addEventListener(handler: (e: Event) => void) {}

// addEventListener((e: MouseEvent) => console.log(e.x + ',' + e.y));

function addEventListener2<E extends Event>(handler: (e: E) => void) {}

interface Cat extends Animal {
  miao: () => void;
}
const cat: Cat = {
  name: 'Cat',
  miao: () => void 0,
};

const dog: Dog = {
  name: 'Dog',
  woof: () => void 0,
};

let dogs: Dog[] = [dog];

animals = dogs;

animals.push(cat);

// dogs.forEach(visitDog); // 类型 ok，但运⾏时会抛出错误

interface ICompatible {
  name: string;
}

interface ICompatibleTwo {
  readonly name: string;
  // age: number;
}

let ic1: ICompatible = {
  name: 'jia',
};

let ic2: ICompatibleTwo = ic1;

{
  let less = (one: number) => void 0;

  let more = (one: number, two: string) => void 0;

  // less = more
  more = less;
}

let optionalParams = (one?: number, two?: number) => void 0;
let requiredParams = (one: number, two: number) => void 0;
let restParams = (...args: number[]) => void 0;

requiredParams = optionalParams;
restParams = optionalParams;

// optionalParams = requiredParams;
// optionalParams = restParams;
restParams = requiredParams;
requiredParams = restParams;

type GetFun<F extends (...args: number[]) => any> = Parameters<F>;
type GetRequiredParams = GetFun<typeof requiredParams>;
// type GetRestParams = GetFun<typeof restParams>;
// type GetEmptyParams = GetFun<() => void>;
// var99 = 4;

// first([1, 2]);

interface Person88 {
  name: string;
}

interface Person88 {
  age: number;
}

namespace Person {
  const age = 18;

  export function getAge() {
    return age;
  }
}

namespace Person {
  export function getMyAge() {
    // return age;
  }
}

type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

type MenuKey = 'home' | 'about' | 'more';

interface Menu {
  label: string;
  hidden?: boolean;
}

const menus: Record<MenuKey, Menu> = {
  home: {
    label: '首页',
  },
  about: {
    label: '关于',
  },
  more: {
    label: '更多',
    hidden: true,
  },
};

// type Key = keyof any;

type CConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;

type CThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
  ? U
  : unknown;

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // methods 中 this 的类型是 D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};

  let methods: object = desc.methods || {};

  return { ...data, ...methods } as D & M;
}

const obj = makeObject({
  data: {
    x: 0,
    y: 0,
  },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    },
  },
});

export type CmpA = (ele: A) => boolean;

enum A {
  A = 'A',
  B = 'B',
}

const c: CmpA = (ele: A) => {
  switch (ele) {
    case A.A:
      return true;
    default:
      return false;
  }
};
