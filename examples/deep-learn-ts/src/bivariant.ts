export {};

interface Event {
  timestamp: number;
}

interface MouseEvent extends Event {
  x: number;
  y: number;
}

interface KetEvent extends Event {
  keyCode: number;
}

enum EventType {
  Mouse,
  Keyboard,
}
function addEventListener(eventType: EventType, handler: (n: Event) => void) {
  // ...
}

// 不安全，但是有用，常见。函数参数的比较是双向协变。
// addEventListener(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));

// 在安全情景下的一种不好方案
addEventListener(EventType.Mouse, (e: Event) =>
  console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y)
);
addEventListener(EventType.Mouse, <(e: Event) => void>(
  ((e: MouseEvent) => console.log(e.x + ',' + e.y))
));

// 仍然不允许明确的错误，对完全不兼容的类型会强制检查
// addEventListener(EventType.Mouse, (e: number) => console.log(e));

enum Status {
  Ready,
  Waiting,
}

enum Color {
  Red,
  Blue,
}

let status = Status.Ready;
let color = Color.Red;

// status = color

class Animal {
  feet?: number;
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet?: number;
  constructor(meters: number) {}
}

let a: Animal;
let s: Size;

// a = s;
// s = a;
