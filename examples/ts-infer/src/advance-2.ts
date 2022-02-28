type Info = {
  name: string;
  age: number;
};

type Student = 'one' | 'two' | 'three';

const my = {
  one: 1,
  two: 2,
  three: 3,
};

type o = Record<string, Info>;

type KA = keyof any;

// type TA = typeof any
type AT = Record<any, any>;

type RN = Record<number, Info>;

const rnList: RN = [
  {
    name: 'sss',
    age: 12,
  },
];

const rnList2: RN = {
  1: {
    name: '',
    age: 2,
  },
};

type RS = Record<string, Info>;

const rsObj: RS = {
  sunny: {
    name: '',
    age: 3,
  },
};

type PO = {
  name: string;
  age: number;
};

const po1: PO = {
  name: 'Sunny',
  age: 18,
};

let po: Partial<PO>;

let pr: Readonly<PO>;

interface Error {
  name: string;
  message: string;
  stack?: string;
}

interface SyntaxError extends Error {}

interface CompilerError extends SyntaxError {
  code: number;
  loc?: string;
}

type pp = Omit<PO, 'name'>;
