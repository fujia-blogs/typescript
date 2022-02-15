class Person {
  constructor(public name = 'sunny') {}

  say() {
    console.log('Hi');
  }
}

class Student extends Person {
  constructor(public age = 18, public name = 'jia') {
    super(name);
  }

  study() {
    console.log('learn');
  }
}
