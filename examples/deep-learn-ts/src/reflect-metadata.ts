import 'reflect-metadata';

@Reflect.metadata('inClass', 'A')
export class Test {
  @Reflect.metadata('inMethod', 'B')
  hello() {
    return 'hello world';
  }
}

// console.log(Reflect.getMetadata('inClass', Test));
// console.log(Reflect.getMetadata('inMethod', new Test(), 'hello'));

function classDecorator(): ClassDecorator {
  return (target) => {
    // 在类上定义元数据，key为“classMetaData”，value为`a`
    Reflect.defineMetadata('classMetaData', 'a', target);
  };
}

function methodDecorator(): MethodDecorator {
  return (target, key, desc) => {
    // 在类的原型属性 'someMethod' 上定义元数据，key 为 `methodMetaData`，value 为 `b`
    Reflect.defineMetadata('methodMetaData', 'b', target, key);
  };
}

@classDecorator()
class SomeClass {
  @methodDecorator()
  someMethod() {}
}

Reflect.getMetadata('classMetaData', SomeClass);
Reflect.getMetadata('methodMetaData', new SomeClass(), 'someMethod');
