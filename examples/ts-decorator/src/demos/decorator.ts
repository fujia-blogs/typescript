function Log(targetClass: any) {
  console.log('targetClass', targetClass?.name);
  targetClass.sold();
}

function enhanceClass(params: any) {
  return (targetClass: any) => {
    console.log('enhance ', params);
  };
}

@Log
@enhanceClass('enhance')
class CustomerService {
  constructor(public name = 'sunny') {}

  static sold() {
    console.log('sold');
  }

  buy() {
    console.log(this.name + 'buy');
  }

  placeOrder() {
    console.log(this.name + 'order');
  }
}
