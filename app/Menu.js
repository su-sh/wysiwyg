console.log('Menu.js');

let thatMenu = undefined;
class Menu {

  constructor(liveTest) {
    thatMenu = this;
    this.liveTestElement = liveTest;
    this.init();

  }

  init() {
    var sectionMenu = new MenuElement('create-section');
    var buttonMenu = new MenuElement('create-button');
    var imageMenu = new MenuElement('create-image');
    var textMenu = new MenuElement('create-text');

    var navBar = new MenuElement('create-nav-bar');
    new EditTextMenu();
    new NavBarMenu();
    new ColorDivMenu();
    new UploadImageMenu();
    new GenerateHTML();

  }

}
