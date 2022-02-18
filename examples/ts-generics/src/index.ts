class ArrayList<T> {
  index: number = 0;
  elements: T[] = [];
  constructor() {}

  add(val: T) {
    this.checkIndex();
    this.elements[this.index++] = val;
  }

  get(index: number) {
    try {
      return this.elements[index];
    } catch (error) {}
  }

  remove(value: T): T;
  remove(value: any) {
    // if (typeof value === 'number') {
    //   this.elements.splice(value, 1);

    //   return value;
    // } else if (typeof value === 'object' && value !== null) {
    //   this.elements = this.elements.filter((el) => el.name !== value.name);
    //   return value;
    // }
    this.elements = this.elements.filter((ele, index) => {
      if (typeof value === 'number') {
        return value !== index;
      } else {
        return ele !== value;
      }
    });

    return value;
  }

  checkIndex() {
    if (this.index < 0) {
      throw new Error("array index can't less than zero!");
    }
  }
}
