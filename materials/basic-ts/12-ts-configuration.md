# tsconfig.json 配置

tsconfig.json 是 TypeScript 项⽬的配置⽂件。如果⼀个⽬录下存在⼀个 tsconfig.json ⽂件，那么往往意味着这个⽬录就是 TypeScript 项⽬的根⽬录。

## compilerOptions

### 项目选型

⽤于配置项⽬的运⾏时期望、转译 JavaScript 的输出⽅式和位置，以及与现有 JavaScript 代码的集成级别。

1. target

target 选项⽤来指定 TypeScript 编译代码的⽬标，不同的⽬标将影响代码中使⽤的特性是否会被降级。

target 的可选值包括 ES3、ES5、ES6、ES7、ES2017、ES2018、ES2019、ES2020、ESNext 这⼏种。

2. module

module 选项可以⽤来设置 TypeScript 代码所使⽤的模块系统。

如果 target 的值设置为 ES3、ES5 ，那么 module 的默认值则为 CommonJS；如果 target 的值为 ES6 或者更⾼，那么 module 的默认值则为 ES6。

另外，module 还⽀持 ES2020、UMD、AMD、System、ESNext、None 的选项。

3. jsx

jsx 选项⽤来控制 jsx ⽂件转译成 JavaScript 的输出⽅式。该选项只影响.tsx ⽂件的 JS ⽂件输出，并且没有默认值选项。

- react: 将 jsx 改为等价的对 React.createElement 的调⽤，并⽣成 .js ⽂件。
- react-jsx: 改为 \_\_jsx 调⽤，并⽣成 .js ⽂件。
- react-jsxdev: 改为 \_\_jsx 调⽤，并⽣成 .js ⽂件。
- preserve: 不对 jsx 进⾏改变，并⽣成 .jsx ⽂件。
- react-native: 不对 jsx 进⾏改变，并⽣成 .js ⽂件。

4. incremental

incremental 选项⽤来表示是否启动增量编译。incremental 为 true 时，则会将上次编译的⼯程图信息保存到磁盘上的⽂件中。

5. declaration

declaration 选项⽤来表示是否为项⽬中的 TypeScript 或 JavaScript ⽂件⽣成 .d.ts ⽂件，这些 .d.ts ⽂件描述了模块导出的 API 类型。

6. sourceMap

sourceMap 选项⽤来表示是否⽣成 sourcemap ⽂件，这些⽂件允许调试器和其他⼯具在使⽤实际⽣成的 JavaScript ⽂件时，显示原始的 TypeScript 代码。

Source map ⽂件以 .js.map （或 .jsx.map）⽂件的形式被⽣成到与 .js ⽂件相对应的同⼀个⽬录下。

7. lib

lib 配置项允许我们更细粒度地控制代码运⾏时的库定义⽂件，⽐如说 Node.js 程序，由于并不依赖浏览器环境，因此不需要包含 DOM 类型定义；⽽如果需要使⽤⼀些最新的、⾼级 ES 特性，则需要包含 ESNext 类型。

## 严格模式

TypeScript 兼容 JavaScript 的代码，默认选项允许相当⼤的灵活性来适应这些模式。
在迁移 JavaScript 代码时，你可以先暂时关闭⼀些严格模式的设置。

在正式的 TypeScript 项⽬中，我推荐开启 strict 设置启⽤更严格的类型检查，以减少错误的发⽣。

1. strict

**强烈建议：将 strict 设置为 true，开启严格模式。**

开启 strict 选项时，⼀般我们会同时开启⼀系列的类型检查选项，以便更好地保证程序的正确性。

- strict 为 true 时，⼀般我们会开启以下编译配置。
  alwaysStrict：保证编译出的⽂件是 ECMAScript 的严格模式，并且每个⽂件的头部会添加 'use strict'。
- strictNullChecks：更严格地检查 null 和 undefined 类型，⽐如数组的 find ⽅法的返回类型将是更严格的 T | undefined。
- strictBindCallApply：更严格地检查 call、bind、apply 函数的调⽤，⽐如会检查参数的类型与函数类型是否⼀致。
- strictFunctionTypes：更严格地检查函数参数类型和类型兼容性。
- strictPropertyInitialization：更严格地检查类属性初始化，如果类的属性没有初始化，则会提示错误。
- noImplicitAny：禁⽌隐式 any 类型，需要显式指定类型。TypeScript 在不能根据上下⽂推断出类型时，会回退到 any 类型。
- noImplicitThis：禁⽌隐式 this 类型，需要显示指定 this 的类型。

2. 额外检查
3. TypeScript ⽀持⼀些额外的代码检查，在某种程度上介于编译器与静态分析⼯具之间。如果你想要更多的代码检查，可能更适合使⽤ ESLint 这类⼯具。

- noImplicitReturns：禁⽌隐式返回。如果代码的逻辑分⽀中有返回，则所有的逻辑分⽀都应该有返回。
- noUnusedLocals：禁⽌未使⽤的本地变量。如果⼀个本地变量声明未被使⽤，则会抛出错误。
- noUnusedParameters：禁⽌未使⽤的函数参数。如果函数的参数未被使⽤，则会抛出错误。
- noFallthroughCasesInSwitch：禁⽌ switch 语句中的穿透的情况。开启 - noFallthroughCasesInSwitch 后，如果 switch 语句的流程分⽀中没有 break 或 return ，则会抛出错误，从⽽避免了意外的 switch 判断穿透导致的问题。

## 模块解析

1. moduleResolution

moduleResolution ⽤来指定模块解析策略。

module 配置值为 AMD、UMD、System、ES6 时，moduleResolution 默认为 classic，否则为 node。

在⽬前的新代码中，我们⼀般都是使⽤ node，⽽不使⽤ classic。

2. baseUrl

baseUrl 指的是基准⽬录，⽤来设置解析⾮绝对路径模块名时的基准⽬录。⽐如设置 baseUrl 为 './' 时，TypeScript 将会从 tsconfig.json 所在的⽬录开始查找⽂件。

3. paths

paths 指的是路径设置，⽤来将模块路径重新映射到相对于 baseUrl 定位的其他路径配置。

**注意：因为 paths 中配置的别名仅在类型检测时⽣效，所以在使⽤ tsc 转译或者 webpack 构建 TypeScript 代码时，我们需要引⼊额外的插件将源码中的别名替换成正确的相对路径。**

4. rootDirs

rootDirs 可以指定多个⽬录作为根⽬录。这将允许编译器在这些“虚拟”⽬录中解析相对应的模块导⼊，就像它们被合并到同⼀⽬录中⼀样。

5. typeRoots

typeRoots ⽤来指定类型⽂件的根⽬录。

在默认情况下，所有 node_modules/@types 中的任何包都被认为是可⻅的。如果⼿动指定了 typeRoots ，则仅会从指定的⽬录⾥查找类型⽂件。

6. types

在默认情况下，所有的 typeRoots 包都将被包含在编译过程中。

⼿动指定 types 时，只有列出的包才会被包含在全局范围内，如下示例：

```ts
{
 "compilerOptions": {
 "types": ["node", "jest", "express"]
 }
}
```

⼿动指定 types 时 ，仅包含了 node、jest、express 三个 node 模块的类型包。

7. allowSyntheticDefaultImports

allowSyntheticDefaultImports 允许合成默认导出。

当 allowSyntheticDefaultImports 设置为 true，即使⼀个模块没有默认导出（export default），我们也可以在其他模块中像导⼊包含默认导出模块⼀样的⽅式导⼊这个模块

```ts
// allowSyntheticDefaultImports: true 可以使⽤
import React from 'react';
// allowSyntheticDefaultImports: false
import * as React from 'react';
```

8. esModuleInterop

esModuleInterop 指的是 ES 模块的互操作性。

在默认情况下，TypeScript 像 ES6 模块⼀样对待 CommonJS / AMD / UMD，但是此时的 TypeScript 代码转移会导致不符合 ES6 模块规范。不过，开启 esModuleInterop 后，这些问题都将得到修复。

⼀般情况下，在启⽤ esModuleInterop 时，我们将同时启⽤ allowSyntheticDefaultImports。

9. Source Maps

为了⽀持丰富的调试⼯具，并为开发⼈员提供有意义的崩溃报告，TypeScript ⽀持⽣成符合 JavaScript Source Map 标准的附加⽂件（即 .map ⽂件）。

10. sourceRoot
    sourceRoot ⽤来指定调试器需要定位的 TypeScript ⽂件位置，⽽不是相对于源⽂件的路径。
    sourceRoot 的取值可以是路径或者 URL。

11. mapRoot

mapRoot ⽤来指定调试器需要定位的 source map ⽂件的位置，⽽不是⽣成的⽂件位置。

12. inlineSourceMap

开启 inlineSourceMap 选项时，将不会⽣成 .js.map ⽂件，⽽是将 source map ⽂件内容⽣成内联字符串写⼊对应的 .js ⽂件中。虽然这样会⽣成较⼤的 JS ⽂件，但是在不⽀持 .map 调试的环境下将会很⽅便。

13. inlineSources

开启 inlineSources 选项时，将会把源⽂件的所有内容⽣成内联字符串并写⼊ source map 中。这个选项的⽤途和 inlineSourceMap 是⼀样的。

## 实验选项

TypeScript ⽀持⼀些尚未在 JavaScript 提案中稳定的语⾔特性，因此在 TypeScript 中实验选项是作为实验特性存在的。

1. experimentalDecorators

> https://github.com/tc39/proposal-decorators

experimentalDecorators\*\*\*\*选项会开启装饰器提案的特性。

⽬前，装饰器提案在 stage 2 仍未完全批准到 JavaScript 规范中，且 TypeScript 实现的装饰器版本可能和 JavaScript 有所不同。

2. emitDecoratorMetadata

emitDecoratorMetadata 选项允许装饰器使⽤反射数据的特性。

## 高级选项

1. skipLibCheck

开启 skipLibCheck 选项，表示可以跳过检查声明⽂件。

如果我们开启了这个选项，则可以节省编译期的时间，但可能会牺牲类型系统的准确性。在设置该选项时，推荐值为 true。

2. forceConsistentCasingInFileNames

TypeScript 对⽂件的⼤⼩写是敏感的。如果有⼀部分的开发⼈员在⼤⼩写敏感的系统开发，⽽另⼀部分的开发⼈员在⼤⼩写不敏感的系统开发，则可能会出现问题。

开启此选项后，如果开发⼈员正在使⽤和系统不⼀致的⼤⼩写规则，则会抛出错误。

3. include

include ⽤来指定需要包括在 TypeScript 项⽬中的⽂件或者⽂件匹配路径。如果我们指定了 files 配置项，则 include 的 默认值为 []，否则 include 默认值为 ["**/*"] ，即包含了⽬录下的所有⽂件。

如果 glob 匹配的⽂件中没有包含⽂件的扩展名，则只有 files ⽀持的扩展名会被包含。
⼀般来说，include 的默认值为.ts、.tsx 和 .d.ts。如果我们开启了 allowJs 选项，还包括 .js 和 .jsx ⽂件。

4. exclude

exclude ⽤来指定解析 include 配置中需要跳过的⽂件或者⽂件匹配路径。⼀般来说，exclude 的默认值为["node_modules", "bower_components", "jspm_packages"]。

**注意：exclude 配置项只会改变 include 配置项中的结果。**

5. files

files 选项⽤来指定 TypeScript 项⽬中需要包含的⽂件列表。

如果项⽬⾮常⼩，那么我们可以使⽤ files 指定项⽬的⽂件，否则更适合使⽤ include 指定项⽬⽂件。

6. extends

extends 配置项的值是⼀个字符串，⽤来声明当前配置需要继承的另外⼀个配置的路径，这个路径使⽤ Node.js ⻛格的解析模式。TypeScript ⾸先会加载 extends 的配置⽂件，然后使⽤当前的 tsconfig.json ⽂件⾥的配置覆盖继承的⽂件⾥的配置。

TypeScript 会基于当前 tsconfig.json 配置⽂件的路径解析所继承的配置⽂件中出现的相对路径。
