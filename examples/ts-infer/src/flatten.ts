const goodId = Symbol('goodId');

interface Goods {
  [goodId]: number;
  name: string;
  price: number;
}

const goodList: Record<number, Goods> = [
  {
    [goodId]: 100,
    name: '苹果',
    price: 6,
  },
  {
    [goodId]: 101,
    name: '香蕉',
    price: 5,
  },
  {
    [goodId]: 102,
    name: '菠萝',
    price: 8,
  },
];
const flattenGoods: Record<number, Goods> = {};
