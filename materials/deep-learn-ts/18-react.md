# ts 与 react

## jsx

1. jsx 背后的动机是允许用户在 JavaScript 中书写类似于 HTML 视图，因此你可以：

- 使用相同的代码，既能检查你的 JavaScript，又能检查 HTML 视图层部分。
- 让视图层了解运行时的上下文
- 复用 JavaScript 设计模式维护 HTML 部分

**jsx 能减少错误的可能性，并且能增加用户界面的可维护性。**

2. 泛型函数

```tsx
function foo<T>(x: T): T {
  return x;
}

const foo = <T extends {}>(x: T) => x;
```
