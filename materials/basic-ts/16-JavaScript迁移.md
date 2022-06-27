# JavaScript 应用迁移到 typescript

从 JavaScript 进化到 TypeScript，也就意味着需要⼤量的迁移、重构操作。

## 迁移步骤

### 调整项⽬结构

1. 调整项⽬结构，⽐如：使⽤ src ⽬录组织源码，typings ⽬录组织类型声明定义，lib ⽬录作为 Node.js 模块的构建产物，build ⽬录作为 Web 项⽬的构建产物。

2. 在项⽬根⽬录下创建⼀个 tsconfig.json，让源码和单测共享⼀个配置⽂件。

### 配置 tsconfig

1. 以配置 React Web 项⽬为例，为了尽可能少改动源码、让项⽬正常运⾏起来，我们不要⼀步到位开启严格模式，⽽应该尽量宽松地配置 tsconfig，如下:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react",
    "typeRoots": ["node_modules/@types", "./typings"]
  },
  "include": ["src", "typings"]
}
```

注意点：

- 配置“target”为 "es5"，⽤来将 TypeScript 转译为低版本、各端兼容性较好的 ES5 代码。
- 开启的 allowJs，它允许 JavaScript 和 TypeScript 混⽤，这使得我们可以分批次、逐模块地迁移代码。
- 把 typings ⽬录添加到类型查找路径，让 TypeScript 可以查找到⾃定义类型声明，⽐如为缺少类型声明的第三⽅模块补⻬类型声明。
- 把 src 和 typings ⽬录添加到 TypeScript 需要识别的⽂件中（也可以按照实际需要添加其他⽬录或者⽂件，⽐如说独⽴的单测⽂件⽬录 \_\_tests\_\_）

注意：因为 Web 项⽬中不会直接使⽤ tsc 转译 TypeScript，所以我们⽆需配置 rootDir、outDir，甚⾄可以开启 noEmit 配置（如上边配置，开启该配置 tsc 不会⽣成转译产物）。

### 构建工具集成 typescript

1. 选择 ts-loader 作为 TypeScript 加载器，并在 webpack.config.js 配置⽂件中添加 resolve 和 module 规则，如下:

```js
module.exports = {
  // 其他配置 ...,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
 module: {
  rules: [
    // 其他配置 loader 规则...,
    {
    test: /\.tsx?$/,
    use: [
    {
    loader: "ts-loader",
    options: { transpileOnly: true }
    }
    ]
    }
 ],
 },
 plugins: [
  // ...其他配置
  new require('fork-ts-checker-webpack-plugin')({
  async: false,
  tsconfig: '...' // tsconfig.json ⽂件地址
  });
 ]
 // 其他配置...
};

```

tips：

- extensions 配置中添加了 .ts、.tsx ⽂件后缀名，是为了让 Webpack 在解析模块的时候同时识别 TypeScript ⽂件；
- Webpack 是以从左到右的顺序读取 extensions 配置并查找⽂件；

**⼀个⽐较好的实践是，我们可以开启 ts-loader 的 transpileOnly 配置，让 ts-loader 在处理 TypeScript ⽂件时，只转译⽽不进⾏静态类型检测，这样就可以提升构建速度了。不过，这并不意味着构建时静态检测不重要，相反这是保证类型安全的最后⼀道防线。此时，可以通过其他性能更优的插件做静态类型检测。**

2. 引⼊了 fork-ts-checker-webpack-plugin 专⻔对 TypeScript ⽂件进⾏构建时静态类型检测（可以通过如下命令，安装该插件）。这样，只要出现任何 TypeScript 类型错误，构建就会失败并提示错误信息。

实际上，静态类型检测确实会耗费性能和时间，尤其是项⽬特别庞⼤的时候，这个损耗会极⼤地降低开发体验。此时，我们可以根据实际情况优化 Webpack 配置，⽐如仅在⽣产构建时开启静态类型检测、开发构建时关闭静态类型检测，这样既可以保证开发体验，也能保证⽣产构建的安全性。

3. 除了使⽤ ts-loader 之外，现在我们也可以使⽤版本号⼤于 7 的 babel-loader 作为 TypeScript 的加载器。

**注意：因为 React Web 项⽬必然已经安装了 babel-loader（必须依赖），所以我们不⽤重新安装 babel-loader，只需确保 babel-loader 的版本号⼤于 7 即可。**

注意：因为 babel-loader 也是只对 TypeScript 代码做转换，⽽不进⾏静态类型检测，所以我们同样需要引⼊ fork-ts-checker-webpack-plugin 插件做静态类型检测。

4. 将 JavaScript 迁移到 TypeScript 是⼀项个没有太⼤技术含量的体⼒活，同时也是⼀项⻓久、渐进的过程。

## 解决错误

### 缺少类型注解

1. 第⼀个错误⼤概率是缺少某个模块的类型声明⽂件 ts(7016)，⽐如说缺少路由组件 react-router-dom 的类型声明。

解决方案：

- 尝试安装 DefinitelyTyped 上可能存在的类型声明依赖；
- 如果 DefinitelyTyped 上恰好没有定义好的依赖类型声明，那么我们就需要⾃⼰解决这个问题了。

如：images.d.ts

```ts
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
```

关于全局变量、属性缺少类型定义的错误，我们也可以使⽤ declare 或者扩充相应的接⼝类型进⾏解决。

可以创建⼀个 global.d.ts 补⻬缺少的类型声明，如下代码所示：

```ts
declare var $: any;
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
interface NodeModule {
  hot?: {
    accept: (id: string, callback: (...args: any) => void) => void;
  };
}
```

注意：不要在 global.d.ts 内添加顶层的 import 或者 export 语句。

### 隐式 any

1. ⼤量函数参数具有隐式 any 类型的 ts(7006) 错误，此时我们需要给所有函数添加类型注解。

2. ⼀个好的实践建议：如果我们确实需要暂时使⽤万⾦油类型 any 来绕过静态类型检测，则可以声明⼀个具有特殊含义的全局类型 AnyToFix 来代替 any。⽐如我们可以在 global.d.ts 内添加如下所示的 AnyToFix 类型别名定义。

```ts
/** 需要替换成更明确的类型 */
type AnyToFix = any;
```

### 动态类型

1. ⼀类极有可能出现的错误是 JavaScript 动态类型特性造成的。

我们习惯先定义⼀个空对象，再动态添加属性，迁移到 TypeScript 后就会提示⼀个对象上属性不存在的 ts(2339) 错误 。

此时，我们需要通过重构代码解决这个问题，具体操作是预先定义完整的对象结构或类型断⾔。

### 有用的坏习惯

1. 必要时，我们可以使⽤ // @ts-ignore 注释强制关闭下⼀⾏代码静态类型检测，但这绝对是⼀个坏习惯。

**切记：所有绕过静态类型检测的方法都是魔鬼，尽量避免使用。**

2. 还可以使⽤ // @ts-nocheck 注释强制关闭整个⽂件静态类型检测。不过，**建议任何时候都不要使⽤这个注释。**

3. 另外⼀个有⽤的坏习惯是双重类型断⾔，即先把源类型值断⾔为 unknown，再把 unknown 断⾔为⽬标类型。

## 自动迁移工具

1. 可以使⽤ Airebnb 开源迁移⼯具 ts-migrate，快速地将 JavaScript 项⽬转换为基本可运⾏的 TypeScript 项⽬。
