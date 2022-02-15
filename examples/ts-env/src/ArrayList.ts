class ArrayList {
  constructor(public elements: any[]) {}

  get(index: number) {
    try {
      return this.elements[index];
    } catch (error) {}
  }

  remove(value: number): number;
  remove(value: object): object;
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
}
