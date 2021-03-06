console.log('Resizer.js')

class Resizer {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.resizerElement = undefined;
    this.eventHandler = undefined;

    this.init();
  }


  init() {
    this.resizerElement = document.createElement('div');
    this.resizerElement.className = 'resizer';
    this.resizerElement.style.width = '10px';
    this.resizerElement.style.height = '10px';
    this.resizerElement.style.background = 'green';
    this.resizerElement.style.position = 'absolute';
    this.resizerElement.style.right = 0;
    this.resizerElement.style.bottom = 0;
    this.resizerElement.style.cursor = 'se-resize';
    this.resizerElement.contentEditable = false;

    // console.log(this.resizerElement);
    // console.log('parent', this.parentEl);

    this.parentEl.appendChild(this.resizerElement);
    this.resizerElement.addEventListener('mousedown', this.initResize.bind(this), false);
  }

  removeResizer() {
    this.parentEl.removeChild(this.resizerElement);
  }


  initResize(e) {
    console.log('initResize');
    this.eventHandler = this.resize.bind(this);
    window.addEventListener('mousemove', this.eventHandler, false);
    window.addEventListener('mouseup', this.stopResize.bind(this), false);
  }


  resize(e) {
    console.log('Resize')
    var headerEl = document.getElementsByClassName('header')[0];

    this.parentEl.style.width = (e.pageX - this.parentEl.offsetLeft) + 'px';
    this.parentEl.style.height = (e.pageY - this.parentEl.offsetTop - headerEl.clientHeight) + 'px';
  }


  stopResize(e) {
    console.log('mouseup');
    window.removeEventListener('mousemove', this.eventHandler, false);
  }
}
