# exception

1. JavaScript 有一个 Error 类，用于处理异常

## RangeError

1. 当数字类型变量或者参数超出其有效范围时，出现 RangeError 的错误提示

## ReferenceError

1. 当引用无效时，会出现 ReferenceError 的错误提示

## SyntaxError

1. 当解析无效 JavaScript 代码时，会出现 SyntaxError 的错误提示

## TypeError

1. 变量或者参数不是有效类型时，会出现 TypeError 的错误提示

## URIError

1. 当传入无效参数至 encodeURI() 和 decodeURI() 时，会出现 URIError 的错误提示

## 使用 Error

1. JavaScript 初学者可能有时候仅仅是抛出一个原始字符串。**不要这么做，使用 Error 对象的基本好处是，它能自动跟踪堆栈的属性构建以及生成位置。** 原始字符串会导致极差的调试体验，并且在分析日志时，将会变得错综复杂。

## 不需要 throw 抛出一个错误

1. 传递一个 Error 对象是没有问题的，这种方式在 node.js 回调函数中非常常见，它用第一个参数作为错误对象进行回调处理：

```ts
function func(callback: (e: Error)) {
  doSomethingAsync(function() {
    if (somethingWrong) {
      callback(new Error('error'))
    } else {
      callback();
    }
  })
}
```

## 用例

1. 「Exceptions should be exceptional」是计算机科学中常用用语

2. 不清楚从哪里抛出错误

示例：

```ts
try {
  const foo = runTask1();
  const bar = runTask2();
} catch (e) {
  console.log('Error:', e);
}
```

下一个开发者可能并不清楚哪个函数可能会抛出错误。在没有阅读 task1/task2 代码以及他们可能会调用的函数时，对代码 review 的人员可能也不会知道错误会从哪里抛出。

### 优雅的捕获错误

1. **通过为每个可能抛出错误的代码显式捕获，来使其优雅。**

```ts
try {
  const foo = runTask1();
} catch (e) {
  console.log('Error:', e);
}

try {
  const bar = runTask2();
} catch (e) {
  console.log('Error:', e);
}
```

### 没有在类型系统中很好地表示

1. 示例

<!-- bad -->

```ts
function validate(value: number) {
  if (value < 0 || value > 100) {
    throw new Error('Invalid value');
  }
}
```

在这种情境下使用 Error 不是一个好的主意。因为没有用来验证函数的类型定义（如：(value: number) => void），取而代之一个更好的方式是创建一个验证方法

```ts
function validate(value: number): {
  error?: string;
} {
  if (value < 0 || value > 100) {
    return {
      error: 'Invalid value',
    };
  }
}
```
