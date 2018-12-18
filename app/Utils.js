class Utils{
  constructor() {}
  static generateRandomId() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26)).toLowerCase() + Date.now();
  }
}