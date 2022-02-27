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
