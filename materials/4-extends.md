# 继承

## 掌握 TS 继承

1，好处

- 深刻理解 JS 原型和原型链
- 更好的理解前端项目架构

## 问答

1，直接使用 Child.prototype = Parent.prototype 的原型链继承和 Child.prototype = new Parent()继承的区别？

## 继承实现

### 原型链继承

1，思路：将子类的原型对象指向父类的实例对象 - Child.prototype = new Person();

2，注意：修改子类 prototype.constructor 的指向 - Child.prototype.constructor = Child;

3，局限性

- 不能通过子类构造函数向子类构造函数传递参数

### 借用构造函数继承

1，思路：在子类内部使用 apply 或 call 方法将参数传递给父类

```js
function Parent(name, age) {
  this.name = name;
  this.age = age;
}

Parent.say = function () {
  console.log('Say Hi!');
};

function Child(name, age, sex) {
  Parent.call(this, name, age);
  this.sex = sex;
}
```

2，不足：

- 没有继承父类原型的属性和方法

### 借用构造函数和原型链组合继承

1，示例：

```js
function Parent(name, age) {
  this.name = name;
  this.age = age;
}

Parent.say = function () {
  console.log('Say Hi!');
};

function Child(name, age, sex) {
  Parent.call(this, name, age);
  this.sex = sex;
}

Child.prototype = new Parent();

Child.prototype.constructor = Child;
```

2，不足：

- 调用了两次父类构造函数，导致：资源浪费和代码冗余

### 寄生组合式继承

> 寄生组合继承=借用构造函数继承+寄生继承

1，示例：

```js
function Parent(name, age) {
  this.name = name;
  this.age = age;
}

Parent.say = function () {
  console.log('Say Hi!');
};

function Child(name, age, sex) {
  Parent.call(this, name, age);
  this.sex = sex;
}

Child.prototype = Object.create(Parent.prototype);
```

2，封装继承逻辑

```js
function _extends(parent, child) {
  function Middle() {
    this.constructor = child;
  }

  Middle.prototype = Parent.prototype;

  return new Middle();
}
```

3，什么是寄生继承？

Child.prototype 不再指向 new Parent()出来的实例，而是指向利用 Parent 的原型对象“克隆”出来的对象。

## 为什么需要继承

### 继承的好处

1，方法重写

应用场景：当父类中的方法的实现不能满足子类功能需要时，需要在子类中进行方法重写

定义规则：

- 方法名相同
- 参数相同，引用类型参数，需要根据具体类型来定义
- 父类方法的访问范围必须大于子类中方法重写的访问范围

## 要点
