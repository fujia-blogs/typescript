function logName(something: { name: string }) {
  console.log(something.name);
}

const params = { name: 'matt', job: 'being awesome' };
logName({ name: 'matt' }); // ok
// logName({ name: 'matt', job: 'being awesome' });

logName(params);

type Foo = {
  kind: 'foo'; // 字面量类型
  foo: number;
};

type Bar = {
  kind: 'bar'; // 字面量类型
  bar: number;
};

function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo);
  }
}
