class Dog {
  say() {
    console.log('dog saying...');
  }
}

const pert = new Dog();

const pertDescriptor = Object.getOwnPropertyDescriptor(Dog.prototype, 'say');
console.log('pertDescriptor: ', pertDescriptor);

const cloneVal = pertDescriptor.value;
pertDescriptor.value = function (args) {
  console.log('pre-intercept');
  cloneVal.call(this, args);
  console.log('post-intercept');
};

Object.defineProperty(Dog.prototype, 'say', pertDescriptor);

pert.say();
