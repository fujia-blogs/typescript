# Freshness

为了能让检查对象字面量类型更容易，TypeScript 提供 「Freshness」 的概念（它也被称为更严格的对象字面量检查）用来确保对象字面量在结构上类型兼容

1. 一个使用比较多的场景是与具有可选成员的接口一起使用，如果没有这样的对象字面量检查，当你输入错误单词的时候，并不会发出错误警告

2. 允许额外的属性

一个类型能够包含索引签名，以明确表明可以使用额外的属性