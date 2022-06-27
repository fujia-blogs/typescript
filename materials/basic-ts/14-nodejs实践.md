# node.js 实践

1. ⼀般来说，建议将 declaration、sourceMap 这两个配置设置为 true，这样构建时就会⽣成类型声明和源码映射⽂件。此时，即便模块在转译之后被其他项⽬引⽤，也能对 TypeScript 类型化和运⾏环境源码提供调试⽀持。

2. ⼀般建议把 target 参数设置为 es5，module 参数设置为 commonjs，这样转译后模块的代码和格式就可以兼容较低版本的 Node.js 了。

3. 将 esModuleInterop 配置为 true，以便在类型检测层⾯兼容 CommonJS 和 ES 模块的引⽤关系，最终适⽤于 Node.js 开发的 tsconfig 如下：

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "sourceMap": true,
    "outDir": "./lib",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

4. 注意：在实际项⽬中，我们并不经常使⽤ tsc --init 初始化 tsconfig。

出于统⼀和可控性考虑，我们可以将通⽤的 tsconfig 配置抽离为单独的 NPM 或直接使⽤第三⽅封装的配置，再通过 extends 参数进⾏复⽤，⽐如可以安装https://www.npmjs.com/package/@tsconfig/node10等。

使用下面的语法继承：

```json
{
  "extends": "@tsconfig/node10",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./lib"
  }
}
```

5. 很多时候因为类型声明补全的成本较⾼，所以我们也可以通过⼀⾏如： “declare module 'ecstatic';”快速绕过 ts(2307) 错误提示。

注意：在业务实践中，如果碰到某个模块缺失类型声明⽂件，则会提示⼀个 ts(2307) 的错误，此时我们可以先尝试通过 npm i @types/模块名 -D 安装可能存在的第三⽅补⻬类型声明。如果找不到，再通过 declare module ⼿动补⻬。

## 在 src/http-serve.ts 中实现主逻辑

1. ⾸先，我们约定模块接收的参数及需要对外暴露的接⼝。

## 单元测试

1. ⼀般来说，运⾏ Node.js 端的模块转译单测代码使⽤的 tsconfig.test.json 配置和转译⽣成代码使⽤的 tsconfig.prod.json 配置完全⼀样，因此我们可以直接将 tsconfig.prod.json 复制到 tsconfig.test.json。

## 要点

1. export 导出模块内的所有必要的类型定义，可以帮助我们减少 ts(4023) 错误。

2. 可以开启 importHelpers 配置，公⽤ tslib 替代内联 import 等相关 polyfill 代码，从⽽⼤⼤减⼩⽣成代码的体积。

**配置 importHelpers 为 true，此时⼀定要把 tslib 加⼊模块依赖中。**

3. 确保 tsconfig.test.json 和 tsconfig.prod.json 中代码转译相关的配置尽可能⼀致，避免逻辑虽然通过了单测，但是构建之后运⾏提示错误。

4. 慎⽤ import \* as ModuleName，因为较低版本的 tslib 实现的 **importStar 补丁有 bug。如果模块 export 是类的实例，经 **importStar 处理后，会造成实例⽅法丢失。另外⼀个建议是避免直接 export ⼀个类的实例

```ts
exports = module.exports = new Command(); // bad
```

5. 推荐使⽤完全⽀持 TypeScript 的 NestJS 框架开发企业级 Node.js 服务端应⽤。
