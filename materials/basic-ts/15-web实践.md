# web 实践

1. 项目配置

```json
{
  //...,
  "target": "es5",
  "lib": ["ESNext", "DOM"],
  "strict": true,
  "alwaysStrict": false
}
```

- 设置了 target es5，所以这⾥我们还需要⼿动引⼊ ts-polyfill 为新特性打补丁，以兼容较低版本的浏览器。
- 如果我们想在函数中使⽤ this，则可以把 alwaysStrict 设置为 false，这样⽣成的代码中就不会有“use strict”（关闭严格模式）了。

## Service 类型化

1. TypeScript 在 Service 层的应⽤，称之为 Service 类型化，实际就是把 JavaScript 编写的接⼝调⽤代码使⽤ TypeScript 实现。

优势：

- 在实际项⽬中，我们需要调⽤的接⼝少则数⼗个，多则成百上千，如果想通过⼿写 TypeScript 代码的⽅式定义清楚参数和返回值的类型结构，肯定不是⼀件轻松的事情。此时，我们可以借助⼀些⼯具，并基于格式化的接⼝⽂档⾃动⽣成 TypeScript 接⼝调⽤代码。
- 在业务实践中，前后端需要约定统⼀的接⼝规范，并使⽤格式化的 Swagger 或者 YAPI 等⽅式定义接⼝格式，然后⾃动⽣成 TypeScript 接⼝调⽤代码。⽬前，这块已经有很多成熟、开源的技术⽅案，例如 Swagger Codegen、swagger-typescript-api、Autos、yapi-to-typescript。

对于前后端使⽤ GraphQL 交互的业务场景，我们也可以使⽤ GraphQL Code Generator 等⼯具⽣成 TypeScript 接⼝调⽤代码。

**的 Service 类型化其实并未与 React 深度耦合，因此我们也可以在 Vue 或者其他框架中使⽤ TypeScript ⼿写或者基于⼯具⽣成接⼝调⽤代码。**

## Component 类型化

1. TypeScript 在 React Component 中的应⽤，将其称之为 Component 类型化。

2. Component 类型化的本质在于清晰地表达组件的属性、状态以及 JSX 元素的类型和结构。

3. class 组件和函数组件类型组成的联合类型被称之为组件类型 React.ComponentType，组件类型⼀般⽤来定义⾼阶组件的属性

4. ⼏个常⽤类型：

- **元素类型 React.ElementType**：指的是所有可以通过 JSX 语法创建元素的类型组合，包括 html 原⽣标签（⽐如 div、a 等）和 React.ComponentType，元素类型可以接收⼀个表示 props 的类型⼊参；
- **元素节点类型 React.ReactElement：**指的是元素类型通过 JSX 语法创建的节点类型，它可以接收两个分别表示 props 和元素类型的类型⼊参；
- **节点类型 React.ReactNode：**指的是由 string、number、boolean、undefined、null、React.ReactElement 和元素类型是 React.ReactElement 的数组类型组成的联合类型，合法的 class 组件 render ⽅法返回值类型必须是 React.ReactNode；
- **JSX 元素类型 JSX.Element：**指的是元素类型通过 JSX 语法创建的节点类型，JSX.Element 等于 React.ReactElement<any, any>。
