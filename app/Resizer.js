console.log('Resizer.js')

class Resizer {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.resizerElement = undefined;
    this.eventHandler = undefined;
    this.init();
    console.log('resizer');
  }


  init() {
    this.resizerElement = document.createElement('div');
    this.resizerElement.className = 'resizer';
    this.resizerElement.style.width = '10px';
    this.resizerElement.style.height = '10px';
    this.resizerElement.style.background = 'red';
    this.resizerElement.style.position = 'absolute';
    this.resizerElement.style.right = 0;
    this.resizerElement.style.bottom = 0;
    this.resizerElement.style.cursor = 'se-resize';
    this.resizerElement.contentEditable = false;

    console.log(this.resizerElement);
    console.log('parent', this.parentEl);


    this.parentEl.appendChild(this.resizerElement);
    this.resizerElement.addEventListener('mousedown', this.initResize.bind(this), false);
  }

  events() {

  }
  initResize(e) {
    console.log('initResize');
    this.eventHandler = this.Resize.bind(this);
    window.addEventListener('mousemove', this.eventHandler, false);
    window.addEventListener('mouseup', this.stopResize.bind(this), false);
  }
  Resize(e) {
    console.log('Resize')
    this.parentEl.style.width = (e.clientX - this.parentEl.offsetLeft) + 'px';
    this.parentEl.style.height = (e.clientY - this.parentEl.offsetTop) + 'px';
  }
  stopResize(e) {
    console.log('mouseup');
    window.removeEventListener('mousemove', this.eventHandler, false);
  }
}
