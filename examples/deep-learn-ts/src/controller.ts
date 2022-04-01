import 'reflect-metadata';

const METHOD_METADATA = 'method';
const PATH_METADATA = 'path';

const Controller = (path: string): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(PATH_METADATA, path, target);
  };
};

const createMappingDecorator =
  (method: string) =>
  (path: string): MethodDecorator => {
    return (target, key, descriptor: PropertyDescriptor) => {
      Reflect.defineMetadata(PATH_METADATA, path, descriptor.value);
      Reflect.defineMetadata(METHOD_METADATA, method, descriptor.value);
    };
  };

const Get = createMappingDecorator('GET');
const Post = createMappingDecorator('POST');

export const isFunction = (val: any): boolean => typeof val === 'function';
export const isConstructor = (val: any): boolean => val === 'constructor';
// 创建一个函数，映射出 route
function mapRoute(instance: Object) {
  const prototype = Object.getPrototypeOf(instance);

  // 筛选出类的 methodName
  const methodNames = Object.getOwnPropertyNames(prototype).filter(
    (item) => !isConstructor(item) && isFunction(prototype[item])
  );

  return methodNames.map((methodName) => {
    const fn = prototype[methodName];

    // 取出定义的 metadata
    const route = Reflect.getMetadata(PATH_METADATA, fn);
    const method = Reflect.getMetadata(METHOD_METADATA, fn);

    return {
      route,
      method,
      fn,
      methodName,
    };
  });
}

@Controller('/test')
class SomeClass {
  @Get('/a')
  getMethod() {
    return 'hello world';
  }

  @Post('/b')
  postMethod() {}
}

console.log(Reflect.getMetadata(PATH_METADATA, SomeClass));

console.log(mapRoute(new SomeClass()));
