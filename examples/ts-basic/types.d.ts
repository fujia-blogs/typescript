declare const var99: number;

// declare function toString(x: number) {
//   return String(x);
// };

declare class Person100 {
  name: string;
  private age: number;
}

declare enum Direction {
  Up,
  Down,
  Left,
  Right,
}

declare module 'lodash' {
  export function first<T extends unknown>(arr: T[]): T;
}

declare enum A {
  A = 'A',
  B = 'B',
}

// export type CmpA = (ele: A) => boolean;
