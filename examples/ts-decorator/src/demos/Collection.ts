type Key = string | symbol;

class Collection<T = any> {
  static collection = new Collection();

  private constructor() {}

  private containerMap = new Map<Key, any>();

  set(id: Key, value: T) {
    this.containerMap.set(id, value);
  }

  get(id: Key): T {
    return this.containerMap.get(id);
  }

  has(id: Key): boolean {
    return this.containerMap.has(id);
  }
}

export default Collection.collection;
