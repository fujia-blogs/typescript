# infer 和高级类型

1. TypeScript 提供了较多的高级类型，通过学习高级类型可以帮助提高 TS 代码的灵活运用能力，掌握好这些高级类型能进一步提升我们对泛型的理解和驾驭能力， 让 TS 功底更深厚，把我们的 TS 水平推向一个更高的层次，无论以后在项目中运用 TS 还是对理解源码的复杂 TS 泛型语法都有不小的帮助， 由于 TS 高级类型为我们提供了很多技巧性强的功能， 当我们在项目中遇到使用这些功能的应用场景时，会给项目带来更简洁，更轻量级的实现效果。

## infer

1. 定义：infer 表示在 extends 条件语句中以占位符出现的用来修饰数据类型的关键字，被修饰的数据类型等到使用时才能被推断出来。

2. infer 占位符式的关键字通常出现的位置：

- 出现在 extends 条件语句后的函数类型的参数类型位置上。
- 出现在 extends 条件语句后的函数类型的返回值类型上。
- 出现在类型的泛型具体化类型上。

3. TS 中，extends 表示泛型约束。

4. infer 不能独立写，只能出现在 extends 条件判断的字句中，否则会抛出异常：`仅条件类型的 "extends" 子句中才允许 "infer" 声明。ts(1338)`

5. 与泛型的区别：

- 泛型可以出现在类、函数，接口和 type 关键上，但是 infer 只能出现在 extends 泛型约束的条件子句中，同时，infer 后面的数据类型不需要预先定义，可以直接使用。

## 高级类型

1. TS 高级类型提供了很多技巧性强的功能，在项目中使用时，可以带来更简洁、更轻量的实现。

### Extract

1. 语法：

```ts
type Extract<T, U> = T extends U ? T : never;
```

### Exclude

1. 语法：

```ts
type Exclude<T, U> = T extends U ? never : T;
```

### Record

1. 语法：

```ts
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```

2. 理解 - K extends keyof any

- keyof any 返回类型：string | number | symbol

3. 理解 - K in keyof T

4. 理解 - K in T

5. object，Map 和 Record 区别：

Map 与 Record:

- Record 有多种实现方式，Map 需要改底层源码
- Record 是轻量级的类型。

```ts
type Record<T> = {
  [P in keyof any]: T;
};
```

读取数据频繁时，建议使用 Record，频繁增删改时，建议使用 Map。

### Pick

1. Pick 主要用于提取某种数据类型的属性，在实际工作中，主要用来提取接口或 type 定义的对象类型中的属性。

2. 语法：

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

### Partial, Required 和 Readonly

1. Required

```ts
type Required<T> = {
  [P in keyof T]-?: T[P];
};
```

2. Partial

```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

3. Readonly

```ts
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

### Omit

1. 语法：

```ts
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```

### 示例

1. 数据扁平化

## TS 在 Vuex 的应用

1. 用接口实现函数重载：

```ts
export interface Commit {
  (type: string, payload?: any, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}
```
