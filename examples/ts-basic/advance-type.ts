type ConstStr = 'string';

type MixType2 = string | ConstStr;

type UnionA = 'px' | 'em' | 'rem' | '%';
type UnionB = 'vh' | 'em' | 'rem' | 'pt';
type IntersectionUnion = UnionA & UnionB;

type BorderColor =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | (string & {});

type UnionInterce =
  | {
      age: '1';
    }
  | {
      age: '1' | '2';
      [key: string]: string;
    };

type UnionInterface =
  | {
      age: number;
    }
  | {
      age: never;
      [key: string]: string;
    };

const p11: UnionInterface = {
  age: 12,
  string: 'string',
};

enum Day {
  SUNDAY,
  MONDAY,
}

enum MyDay {
  SUNDAY,
  MONDAY = Day.MONDAY,
}

const mondayIsDay: Day.MONDAY = Day.MONDAY;

// const mondayIsMyDay: MyDay.MONDAY = MyDay.MONDAY;

declare let $2: any;

declare enum Day2 {
  SUNDAY,
  MONDAY,
}

const work = (x: Day2) => {
  if (x === Day2.MONDAY) {
    x;
  }
};

interface Dog {
  wang: string;
}
interface Cat {
  miao: string;
}

const isDog = (animal: Dog | Cat): animal is Dog => {
  return 'wang' in animal;
};

const getName = <T extends Dog | Cat>(animal: T) => {
  if ('wang' in animal) {
    return animal.wang;
  }

  return animal.miao;
};

{
  let unknown: unknown;

  // const a: number = unknown;
}

{
  enum A {
    one,
  }

  let num: number = A.one;
}

{
  interface I1 {
    name: string;
  }
  interface I2 {
    id: number;
    name: string;
  }
  class C2 {
    id = 1;
    name = '1';
  }

  let i1: I1;
  let i2: I2 = {
    id: 1,
    name: 'fujia',
  };
  let i3 = {
    id: 2,
    name: 'name',
  };
  let instanceC2: C2;

  // i1 = {
  //   id: 2,
  //   name: 'jia'
  // }

  i1 = i2;
  i1 = i3;
  // i1 = instanceC2;
}

{
  interface I1 {
    name: number;
  }
}

{
  interface I1<T> {
    id: T;
  }

  let i1: I1<string>;
  let i2: I1<number> = {
    id: 2,
  };

  // i1 = i2;
}
