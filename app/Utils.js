class Utils {
  constructor() {}
  static generateRandomId() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26)).toLowerCase() + Date.now();
  }


  static getIdType(str) {
    var i = str.indexOf("_");
    if (i > 0)
      return str.slice(0, i);
    else
      return "";
  }

}