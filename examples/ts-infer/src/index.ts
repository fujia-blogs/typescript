class People {
  constructor(public name: string, public age: number) {}
}

class Student {
  name!: string;
  age!: number;
  phone!: string;
  constructor(name_: string, age_: number, phone_: string) {
    this.age = age_;
    this.name = name_;
    this.phone = phone_;
  }

  study() {}
}

const p1 = new People('sunny', 18);

p1 as Student;

const s1 = new Student('sunny', 18, '185xxx');

s1 as People;

// const arr: (string | number)[] = [10, 20, 'a', 'b'] as const;

// function metadata(
//   key: any,
//   value: any
// ):

export {};
