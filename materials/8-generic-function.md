# 泛型函数

## 泛型工厂函数

1. 工厂函数类型定义：代表所有类的构造函数的函数类型。

2. 泛型工厂函数定义：一个可以创建任意类对象的通用泛型函数。

3. 使用场景：

- 不能或不方便直接使用 new ClassName()的方式来创建对象。
- 在项目测试或调试中简化代码使用。

```ts
type commonFunc = (...args: any) => any;

// 等价于下面写法，注意：这不是对象类型，而是使用接口表示函数类型
interface ICommonFunc {
  (...args: any): any;
}
// 注意：与下面的区别
interface ICommonFunc {
  eat: (...args: any) => any;
}
```

### 工厂函数类型

1. 通常是针对构造对象来说的。

2. 在 TS 中，不能直接 new 一个函数来创建实例对象，推荐 new 一个 class 来创建对象。

3. 构造函数就是一个使用类名作为函数名的函数。

4. 为了区分普通函数类型，构造函数类型会加一个 new 关键字

```ts
type ComFuncType = new (...args: any) => ComFunc;
```

5. 在 TS 中，类的构造函数只能返回当前类类型。

6. 通用的构造类型：

```ts
type ConstructorType = new (...args: any) => any;
```

7. 工厂函数

```ts
function createInstanceFactory(Constructor: new (...args: any) => any) {
  console.log(Constructor.name);
  new Constructor();
}
```

## 交叉类型

1. 定义：将多个类型合并成的类型就是交叉类型，可以理解为多个类型属性和方法的并集。

2. 使用类型操作符：&

3. 与联合类型的区别：

- 交叉类型变量可以获取两个类型的任意属性和任意方法，联合类型的变量只能获取两个类型共同属性和方法。
