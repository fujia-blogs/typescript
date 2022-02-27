type Constructor<T> = new (...args: any[]) => T;

// 获取函数类型的参数类型
type ConstructorParamType<T extends new (...args: any[]) => any> =
  T extends new (...args: infer P) => any ? P : never;

export class Animal {
  constructor(public nickname: string, public age: number) {}

  say() {
    console.log(`the animal named ${this.nickname} and ${this.age} years.`);
  }
}

let constructorParameters: ConstructorParamType<typeof Animal>;

// 通用的实例方法
function createInstance<T, P extends new (...args: any[]) => any>(
  constructor: Constructor<T>,
  ...args: ConstructorParamType<P>
) {
  return new constructor(...args);
}

const pert = createInstance<Animal, typeof Animal>(Animal, 'pert', 1);

pert.say();
