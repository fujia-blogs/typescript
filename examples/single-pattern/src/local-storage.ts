class LocalStorage {
  /**
   * synopsis
   *
   * 1. using single pattern
   *  1.1 set the constructor to private, don't allow external creation of instance of class.
   *  1.2 at least should provide one external access method or property, which must be static method
   *  1.3 get the instance via above static method
   */
  static storageInstance: LocalStorage;
  private constructor() {}

  static getInstance() {
    if (!this.storageInstance) {
      this.storageInstance = new LocalStorage();
    }

    return this.storageInstance;
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, this.stringify(value));
  }

  getItem(key: string) {
    const value = localStorage.getItem(key);

    return !!value ? this.parse(value) : null;
  }

  private stringify(value: any) {
    return JSON.stringify(value);
  }

  private parse(value: string) {
    return JSON.parse(value);
  }
}
