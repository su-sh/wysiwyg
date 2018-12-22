console.log('deleter.js');

class Deleter {
  constructor(grandParentEl, parentEl) {
    this.grandParentEl = grandParentEl;
    this.parentEl = parentEl;
    this.deleterEl = undefined;
    this.eventHandler = undefined;
    this.init();
    console.log('deleter');
  }

  init() {
    this.deleterEl = document.createElement('div');
    this.deleterEl.className = 'resizer';
    this.deleterEl.style.width = '10px';
    this.deleterEl.style.height = '10px';
    this.deleterEl.style.background = 'red';
    this.deleterEl.style.position = 'absolute';
    this.deleterEl.style.right = 0;
    this.deleterEl.style.top = 0;
    this.deleterEl.style.cursor = 'se-resize';
    this.deleterEl.contentEditable = false;


    this.parentEl.appendChild(this.deleterEl);

    this.deleterEl.addEventListener('mousedown', this.initDelete.bind(this), false);
  }

  initDelete(e) {
    e.stopPropagation();

    this.eventHandler = this.deleteEl.bind(this);
    console.log('grandParent', this.grandParentEl);

    this.grandParentEl.removeChild(this.parentEl);
    // window.addEventListener('mouseup', this.stopDelete.bind(this), false);
  }
  deleteEl() {

  }
}
