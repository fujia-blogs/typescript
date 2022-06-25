{
  let anything: any = {};

  // let neverVar: never = anything;

  let res: unknown;

  // let num: number = res;
  let undeclared: undefined = undefined;
  let unusable: void = undefined;
  unusable = undeclared;
  // undeclared = unusable;
}

function ThrowError(msg: string): never {
  throw Error(msg);
}

const str: string = 'string';

if (typeof str === 'number') {
  // str.toLowerCase();
}

const arrNum = [1, 2, 3, 4];

const greaterThan2: number = arrNum.find((n) => n > 2) as number;

let s2 = 'str' as const;
const readOnlyArr = [0, 1] as const;

function add2(a: number, b = 2) {
  return a + b;
}

{
  type Adder = (a: number, b: number) => number;

  const add: Adder = (a, b) => {
    return a + b;
  };
}

{
  let sStr: 'string' = 'string';
  let sNum: 1 = 1;
  let sBool: false = false;
}

{
  const str = 'string';
  let wString = 'literal widening';
}

{
  let x = null;
  let y = undefined;
}

{
  const func = (a: any) => {
    if (typeof a === 'string') {
      return a;
    } else if (typeof a === 'number') {
      return a;
    }

    return null;
  };
}

abstract class Adder2 {
  abstract x: number;
  abstract y: number;

  abstract add(): number;
  displayName = 'Adder2';

  addTwice(): number {
    return (this.x + this.y) * 2;
  }
}

class NumAdder extends Adder2 {
  constructor(public x: number, public y: number) {
    super();
  }

  add(): number {
    return this.x + this.y;
  }
}

// function fn(): undefined {}

function computeTypes(one: string, two: number) {
  const nums = [two];
  const strs = [one];

  return {
    nums,
    strs,
  };
}

type AnyType = boolean;
type AnyReturnType = string;
type AnyNextType = number;

function* gen(): Generator<AnyType, AnyReturnType, AnyNextType> {
  const nextValue = yield true;

  return `${nextValue}`;
}

function log1(x: string | undefined) {
  console.log(x);
}

// log1(undefined)

function log3(x = 'hi') {
  console.log(x);
}

// log3(2)

function say(this: Window, name: string) {
  console.log(this.name);
}

window.say = say;
window.say('hi');

const o99 = {
  say,
};

// o99.say('hi')

class Component {
  onClick(this: Component) {}
}

const component = new Component();
interface UI {
  addClickListener(onClick: (this: void) => void): void;
}

const ui: UI = {
  addClickListener() {},
};
