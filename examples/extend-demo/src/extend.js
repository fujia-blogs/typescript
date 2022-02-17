function Parent(name, age) {
  this.name = name;
  this.age = age;
}

Parent.say = function () {
  console.log('Hi, say');
};

function Child(sex) {
  this.sex = sex;
}

Child.prototype = new Parent();

const son = new Child('male');
const father = new Parent('sunny', 18);
console.log('son', son);
console.log('son.prototype', Child.prototype);
console.log('father', father);
console.log('father.prototype', Parent.prototype);
