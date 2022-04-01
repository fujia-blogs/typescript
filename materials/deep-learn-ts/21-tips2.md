# typescript tips

## typescript 中的静态构造函数

1. TypeScript 中的 class （JavaScript 中的 class）没有静态构造函数的功能，你可以通过调用它自己来获取相同的效果。

## 单例模式

1. 单例只是全局的一个别称

## 函数参数

1. 如果你有一个含有很多参数或者相同类型参数的函数，那么你可能需要考虑将函数改为接收对象的形式

## Truthy

1. JavaScript 有一个 truthy 概念，即在某些场景下会被推断为 true，例如除 0 以外的任何数字

2. 明确的

通过操作符 !!，你可以很容易的将某些值转化为布尔类型的值

## 构建切换

1. 根据 JavaScript 项目的运行环境进行切换环境变量是很常见的，通过 webpack 可以很轻松地做到这一点，因为它支持基于环境变量的死代码排除

## 类型安全的 Event Emitter

1. 通常来说，在 Node.js 与传统的 JavaScript 里，你有一个单一的 Event Emitter，你可以用它来为不同的事件添加监听器.

2. 实际上，在 EventEmitter 内部以映射数组的形式存储数据，**为了事件的类型安全，**可以为每个事件类型创建一个 emitter

优点：

- 事件的类型，能以变量的形式被发现
- Event Emitter 非常容易被重构
- 事件数据结构是类型安全的

## Reflect Metadata

1. Reflect Metadata 是 ES7 的一个提案，它主要用来在声明的时候添加和读取元数据。TypeScript 在 1.5+ 的版本已经支持它，你只需要：

- 安装 reflect-metadata
- 配置 emitDecoratorMetadata

2. Reflect Metadata 的 api 可以用于类或类的属性上。

- Reflect.metadata 当作 Decorator 使用，当修饰类时，在类上添加元数据，当修饰类属性时，在类原型的属性上添加元数据

3. 应用场景

**获取类型信息：**

**自定义 metadataKey:**

常用于自定义 metadataKey，并在合适的时机获取它的值。

**控制反转和依赖注入**

## 协变(covariant)与逆变(contravariant)

1. 子类型 在编程理论上是一个复杂的话题，而他的复杂之处来自于一对经常会被混淆的现象，我们称之为协变与逆变

2. 约定如下的标记：

- A ≼ B 意味着 A 是 B 的子类型。
- A → B 指的是以 A 为参数类型，以 B 为返回值类型的函数类型。
- x : A 意味着 x 的类型为 A。

3. **允许一个函数类型中，返回值类型是「协变」的，而参数类型是「逆变」的。**

- 返回值类型是协变的，意思是 A ≼ B 就意味着 (T → A) ≼ (T → B) 。
- 参数类型是逆变的，意思是 A ≼ B 就意味着 (B → T) ≼ (A → T) （ A 和 B 的位置颠倒过来了）。

4. **一个有趣的现象**：在 TypeScript 中， 参数类型是双向协变的，也就是说既是协变又是逆变的，而这并不安全。但是现在你可以在 TypeScript 2.6 版本中通过 --strictFunctionTypes 或 --strict 标记来修复这个问题。

5. Q: List\<Dog> 能否为 List\<Animal> 的子类型？

可以允许不变的列表（immutable）在它的参数类型上是协变的，但是对于可变的列表（mutable），其参数类型则必须是不变的（invariant），既不是协变也不是逆变。

一个有趣的现象：在 Java 中，数组既是可变的，又是协变的。当然，这并不安全。

### 变体

对一个简单类型 Base 和 Child 来说，如果 Child 是 Base 的子类，Child 的实例能被赋值给 Base 类型的变量

在由 Base 和 Child 组合的复杂类型的类型兼容性中，它取决于相同场景下的 Base 与 Child 的变体：

- 协变（Covariant）：只在同一个方向；
- 逆变（Contravariant）：只在相反的方向；
- 双向协变（Bivariant）：包括同一个方向和不同方向；
- 不变（Invariant）：如果类型不完全相同，则它们是不兼容的。

## infer

1. infer 表示在 extends 条件语句中待推断的类型变量。

### 内置类型

1. 用于提取函数类型的返回值类型：

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```
