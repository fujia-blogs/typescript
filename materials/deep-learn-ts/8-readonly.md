# readonly

1. ts 类型系统允许你在一个接口里使用 readonly 来标记属性，它能让你以一种更安全的方式工作（**不可预期的改变是糟糕的**）。

2. 一个 Readonly 的映射类型，它接受一个泛型 T，用来把它的所有属性标记为只读类型。

```ts
type Foo = {
  name: string;
  age: number;
};

type ReadonlyFoo = Readonly<Foo>;
```

3. 自动推断，在一些情况下，编译器能把一些特定的属性推断为 readonly，如：一个 class 中，如果你有一个只含有 getter，但没有 setter 的属性，它被推断为只读。

4. 与 const 的不同

const:

- 用于变量
- 不能赋值给其它事物

readonly

- 用于属性
- 用于别名，可以修改属性
