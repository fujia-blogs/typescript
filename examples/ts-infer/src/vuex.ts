let num: String;

// num = 3;
// let num2: string = num
const obj6 = {
  name: 'sunny',
  age: 18,
};

// let name = 'name';
const name = 'name';
obj6[name];

// 接口作为函数名
interface ActionContext {
  (state: any, commit: any): void;
}

const actionOne: ActionContext = () => {};
export {};
