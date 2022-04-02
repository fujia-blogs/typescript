interface ScreenCoordinate {
  _screen: any;
  x: number;
  y: number;
}
interface PrintCoordinate {
  _print: any;
  x: number;
  y: number;
}
function sendToPrinter(pt: PrintCoordinate) {
  // ...
}
function getCursorPos(): ScreenCoordinate {
  // Not a real implementation
  return { x: 0, y: 0 } as ScreenCoordinate;
}

// sendToPrinter(getCursorPos())
// sendToPrinter(getCursorPos())

interface SomeInterface {
  name: string;
  length: number;
}
interface SomeOtherInterface {
  questions: string[];
}

function isSomeInterface(x: any): x is SomeInterface {
  return typeof x.name === 'string' && typeof x.length === 'number';
}

function f(x: SomeInterface | SomeOtherInterface) {
  // Can't use instanceof on interface, help?
  // if (x instanceof SomeInterface) {
  // }

  if (isSomeInterface(x)) {
    console.log(x.name);
  }
}

class FooError extends Error {
  constructor(m: string) {
    super(m);
  }

  sayHello() {
    return 'hello ' + this.message;
  }
}

const fe = new FooError('foo error');
// console.log(fe.);

interface Something<T> {
  name: string;
}
let x: Something<number>;
let y: Something<string>;
// Expected error: Can't convert Something<number> to Something<string>!
// x = y;

export {};
