console.log('Menu.js');

class Menu {

  constructor(liveTest) {
    this.liveTestElement = liveTest;
    this.init();
  }

  init() {
    var sectionMenu = new MenuElement('create-section');
    var buttonMenu = new MenuElement('create-button');
    var imageMenu = new MenuElement('create-image');
    var textMenu = new MenuElement('create-text');
    var listMenu = new MenuElement('create-list');
    var navBar = new MenuElement('create-nav-bar');
    new EditTextMenu();
    new NavBarMenu();
    new DivMenu();
    new UploadImageMenu();
    new GenerateHTML();
  }

}
