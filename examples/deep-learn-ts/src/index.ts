import * as $ from 'jquery';

// import path from 'path';

export const some = 'sunny';

class MyPoint implements Point {
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

let foo1: Point = new MyPoint();
// let foo2: Point =  MyPoint;

const foo = 123;

const bar = foo.toString();

window.helloWorld = () => console.log('hello world');
window.helloWorld();

String.prototype.endsWith = function (suffix: string): boolean {
  const str = this;
  return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
};
