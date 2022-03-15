class Person {
  constructor(run: (val?: any) => any) {
    console.log('constructor');
    run();
  }

  then() {
    const self = this;
    return new Person(function () {
      // @ts-ignore
      console.log('then', self === this);
    });
  }
}

const p = new Person(() => {
  console.log('method');
});

p.then();
