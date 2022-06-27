type isSubTyping<Child, Parent> = Child extends Parent ? true : false;

type UsefulNeverX<T> = T extends {} ? T[] : [];

type ThisIsNeverX = UsefulNeverX<never>;

type EleTypeOfArray<T> = T extends (infer E)[] ? E : never;

type EleTypeOfObj<T> = T extends {
  name: infer E;
  id: infer I;
}
  ? [E, I]
  : never;

type isArray = EleTypeOfObj<{
  name: 'name';
  id: 1;
  age: 30;
}>;

// type T = Readonly<T>

type JSON =
  | string
  | number
  | JSON[]
  | {
      [key: string]: JSON;
    };

export {};

new Promise<void>((resolve) => {
  resolve();
});

// interface Obj {
//   [key in 'id' | 'name']: any;
// }
const symbol: unique symbol = Symbol();

interface Obj {
  [key: string]: any;
  [key: number]: any;
  [symbol]: any;
}

type Obj2 = {
  [key in 'id' | 'name']: any;
};

let x: string | undefined;

if (x) {
  x.trim();
  setTimeout(() => {
    x?.trim();
  });
}

let num: number;
let Num: Number = 5;
// Num = num;
// num = Num;

type PrefixType<P extends string, N extends string> = `${P}/${Capitalize<
  string & N
>}`;

type UserLoginAction = PrefixType<'User', 'login'>;

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserInfoGetters = Getters<{ id: number; name: string }>;
