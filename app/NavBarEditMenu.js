console.log('NavBarMenu');

class NavBarMenu {
  constructor() {
    this.addMenuItemEl = undefined;
    this.removeMenuItemEl = undefined;
    this.init();
    this.addEvent();
  }

  init() {
    this.addMenuItemEl = document.getElementById('add-nav-item');
    this.removeMenuItemEl = document.getElementById('remove-nav-item');
  }

  addEvent() {
    this.addMenuItemEl.addEventListener('mousedown', this.addMenuItem.bind(this));
    this.removeMenuItemEl.addEventListener('mousedown', this.removeMenuItem);
  }

  addMenuItem() {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'nav') {
      console.log('addMenuEL');


      let ulEl = document.getElementById(Data.getCurrentMouseClickElId()).firstElementChild;
      // console.log(ulEl);
      ulEl.appendChild(this.addLi('new'))
    }

  }

  removeMenuItem() {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'nav') {
      console.log('removeEl');
      let ulEl = document.getElementById(Data.getCurrentMouseClickElId()).firstElementChild;
      console.log(ulEl);
      ulEl.removeChild(ulEl.lastChild)
    }

  }






  addLi(contentText) {
    var liEl = document.createElement('li');
    var a1 = document.createElement('a');
    a1.href = '#';
    a1.innerHTML = contentText;
    a1.contentEditable = true;
    liEl.appendChild(a1);


    a1.style.display = 'block';
    a1.style.color = 'white';
    a1.style.textAlign = 'center';
    a1.style.padding = '14px 16px';

    a1.style.textDecoration = 'none';

    liEl.style.float = 'left';
    return liEl;

  }
}
