console.log('deleter.js');

class Deleter {
  constructor(grandParentEl, parentEl) {
    this.grandParentEl = grandParentEl;
    this.parentEl = parentEl;
    this.deleterEl = undefined;
    this.eventHandler = undefined;
    this.init();
  }



  init() {
    this.deleterEl = document.createElement('div');
    this.deleterEl.className = 'resizer';
    this.deleterEl.style.width = '10px';
    this.deleterEl.style.height = '10px';
    this.deleterEl.style.position = 'absolute';
    this.deleterEl.style.right = 0;
    this.deleterEl.style.top = 0;
    this.deleterEl.style.background = 'red';

    // let url = './app/asset/close.png';
    // this.deleterEl.style.backgroundImage = 'url(' + './app/asset/close.png' + ')';

    this.deleterEl.title = 'Delete Element';
    // this.deleterEl.style.cursor = 'pointer';

    this.deleterEl.contentEditable = false;
    this.parentEl.appendChild(this.deleterEl);
    this.deleterEl.addEventListener('mousedown', this.initDelete.bind(this), false);

  }



  initDelete(e) {
    e.stopPropagation();
    let answer = confirm("Delete Element?")
    if (answer) {
      // this.eventHandler = this.deleteEl.bind(this);
      console.log('grandParent', this.grandParentEl);
      this.grandParentEl.removeChild(this.parentEl);
    }
  }



  removeDeleter() {
    this.parentEl.removeChild(this.deleterEl);
  }


}
