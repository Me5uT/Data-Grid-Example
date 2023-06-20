export class LocalStorage {
  static setItem(key: string, data: any[]) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static getItem(key: string) {
    const item = localStorage.getItem(key);

    if (item) {
      return JSON.parse(item);
    } else return undefined;
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
