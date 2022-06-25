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
