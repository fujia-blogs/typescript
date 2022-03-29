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

class Person {
  firName = 'fu';
  lastName = 'sunny';

  get fullName() {
    return this.firName + this.lastName;
  }
}

interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}

let iMakePoint2D = (): Point2D => ({ x: 0, y: 0 });
let iMakePoint3D = (): Point3D => ({ x: 0, y: 0, z: 0 });

iMakePoint2D = iMakePoint3D;

// iMakePoint3D = iMakePoint2D;
