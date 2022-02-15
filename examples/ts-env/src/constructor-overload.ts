type SquareOpts = {
  width?: number;
  height?: number;
  radius?: number;
};

class Square {
  w?: number;
  h?: number;

  constructor(w: number, h: number);
  constructor(options: SquareOpts);
  constructor(widthOrOpts: number | SquareOpts, h?: number) {
    if (typeof widthOrOpts === 'object') {
      this.w = widthOrOpts.width;
      this.h = widthOrOpts.height;
    } else {
      this.w = widthOrOpts;
      this.h = h;
    }
  }
}
