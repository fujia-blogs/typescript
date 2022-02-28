interface Customer {
  name: string;
  age: number;
}

type CusFuncType = (cus: Customer) => string;

// type InferType<T> = T extends (param: infer P) => any ? P : T;
type InferType<T> = T extends (param: any) => infer P ? P : T;

type ResultType = InferType<CusFuncType>;

class Subject {
  constructor(public sid: number, public name: string) {}
}

const chinese = new Subject(100, 'Chinese');
const math = new Subject(101, 'Math');
const english = new Subject(102, 'English');

const sunnySubject = new Set<Subject>([chinese, math, english]);

type SunnySubjectType = typeof sunnySubject;

type ElementOne<T> = T extends Set<infer E> ? E : never;

// infer出现在类型的泛型具体化类型上
let res: ElementOne<Set<string>>;

class Parent {
  constructor(public name: string, public age: number) {}
}

class Child extends Parent {
  // say() {}
  // private learn() {}
  private gender!: string;
}

type resExtract = Extract<Child, Parent>;

type funcType1 = (one: number, two: string) => string;
type func2 = (one: number) => string;

type testT1 = funcType1 extends func2 ? funcType1 : never;
type testT2 = func2 extends funcType1 ? func2 : never;

type CrossType<T> = Extract<T, object>;
function cross<T, U>(objOne: CrossType<T>, objectTwo: CrossType<U>): T & U;
function cross<T, U, V>(
  objOne: Extract<T, object>,
  objectTwo: Extract<U, object>,
  objectThree: Extract<V, object>
): T & U & V;
function cross<T, U, V>(
  objOne: Extract<T, object>,
  objectTwo: Extract<U, object>,
  objectThree?: Extract<V, object>
): any {}

let func: funcType1 = function (one: number): string {
  console.log(one);
  return 'ccc';
};

func(3, '');
