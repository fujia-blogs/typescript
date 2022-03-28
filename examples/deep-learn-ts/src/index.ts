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
