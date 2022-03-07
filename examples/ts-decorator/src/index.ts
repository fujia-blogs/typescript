function LoggerInfo<T extends { new (...args: any): any }>(target: T) {
  class Logger extends target {
    constructor(...args: any) {
      super(...args);
      console.log('info: ', target.name);
    }

    done() {
      console.log('do somethings');
    }
  }

  return Logger;
}

function AnonymousLoggerInfo<T extends { new (...args: any): any }>(target: T) {
  return class extends target {
    constructor(...args: any) {
      super(...args);
      console.log('info: ', target.name);
    }

    done() {
      console.log('do somethings');
    }
  };
}

@LoggerInfo
class Test {
  constructor(public name: string) {}

  eat() {
    console.log(this.name, 'eating');
  }
}

const n = new Test('sunny');
