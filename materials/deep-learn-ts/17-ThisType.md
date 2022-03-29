# ThisType

1. 通过 ThisType 可以在对象字面量中键入，并提供通过上下文类型控制 this 类型的便捷方式。**它只有在 --noImplicitThis 的选项下才有效。**

2. 在对象字面量方法中的 this 类型，将由以下决定：

- 如果这个方法显式指定了 this 参数，那么 this 具有该参数的类型
- 否则，如果方法由带 this 参数的签名进行上下文键入，那么 this 具有该参数的类型。
- 否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中包含由 ThisType\<T> 键入的上下文类型，那么 this 的类型为 T
- 否则，如果 --noImplicitThis 选项已经启用，并且对象字面量中不包含由 ThisType\<T> 键入的上下文类型，那么 this 的类型为该上下文类型
- 否则，如果 --noImplicitThis 选项已经启用，this 具有该对象字面量的类型
- 否则，this 的类型为 any

3. 通过 API 转换参数的形式来生成 this 的值的情景下，可以通过创建一个新的 ThisType\<T>标记接口，可用于在上下文中标明转换后的类型，尤其是当字面量中的上下文类型为 ThisType\<T>或者包含 ThisType\<T>的交集时，尤为有效对象字面量方法中 this 的类型即为 T。

4. **ThisType\<T>的接口，在 lib.d.ts 只是被声明为空的接口，除了可以在对象字面量上下文中可以被识别以外，该接口的作用等同于任意空接口。**
