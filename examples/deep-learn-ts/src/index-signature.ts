const obj = {
  toString() {
    console.log('toString called');
    return 'hello';
  },
};

let foo: any = {};
foo[obj.toString()] = 'World';

// V8
console.log(foo['[object Object]']);

export {};

type Index = 'a' | 'b' | 'c';

type FromIndex = {
  [k in Index]?: number;
};

const good: FromIndex = {
  b: 3,
  c: 5,
};

interface ArrStr {
  [key: string]: string | number;
  [index: number]: string;
}

interface NestedCSS {
  color?: string;
  nest?: {
    [selector: string]: NestedCSS;
  };
}
