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
