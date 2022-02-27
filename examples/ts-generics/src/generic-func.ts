class Person {
  static gender?: string;
  constructor(public name: string, public age: number) {}

  say() {
    console.log(`Hi, ${this.name}!`);
  }
}

type ConstructorType<T> = new (...args: any[]) => T;
interface IConstructor<T> {
  new (...args: any): T;
}

function createInstanceFactory<T>(Constructor: new (...args: any) => T) {
  console.log(Constructor.name);
  return new Constructor();
}

const sunny = createInstanceFactory<Person>(Person);

type MyClassDecorator = <T>(targetClass: { new (...args: any[]): T }) => void;
function Controller(rootPath: string): MyClassDecorator {
  return function (targetClass) {};
}
