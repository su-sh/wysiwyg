class Dragger {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.draggerElement = undefined;
    this.dragEventHandeler = undefined;
    this.init();
  }

  init() {
    this.draggerElement = document.createElement('div');
    this.draggerElement.className = 'resizer';
    this.draggerElement.style.width = '10px';
    this.draggerElement.style.height = '10px';
    this.draggerElement.style.background = 'blue';
    this.draggerElement.style.position = 'absolute';
    this.draggerElement.style.left = 0;
    this.draggerElement.style.top = 0;
    this.draggerElement.style.cursor = 'grab';

    this.parentEl.appendChild(this.draggerElement);
    this.draggerElement.addEventListener('mousedown', this.initDrag.bind(this), false);

  }


  initDrag() {
    console.log('initResize');
    this.eventHandler = this.drag.bind(this);
    window.addEventListener('mousemove', this.eventHandler, false);
    window.addEventListener('mouseup', this.stopDrag.bind(this), false);
  }

  drag(e) {
    this.draggerElement.style.cursor = 'grabbing';
    this.parentEl.style.position = 'absolute';
    this.parentEl.style.top = e.clientY;

    // this.parentEl.style.top = e.clientY + 'px';
    let currentx = this.parentEl.style.width;
    console.log(currentx)
    this.parentEl.style.left = (e.clientX + 'px');
  }

  stopDrag(e) {
    this.draggerElement.style.cursor = 'grab';
    window.removeEventListener('mousemove', this.eventHandler, false);
  }

  removeDragger() {
    this.parentEl.removeChild(this.draggerElement);
  }
}
