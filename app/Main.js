console.log('Main.js');
let that;
class Main {
  constructor() {
    // this.initApp();
    this.liveDisplayEl = undefined;
    that = this;
    this.init();
  }


  // Setup DragDrop and Bottom
  init() {
    this.liveDisplayEl = document.getElementById('live-display');
    var menu = new Menu(this.liveDisplayEl);
    this.setLiveDisplay();
  }


  /**
   *
   * Setting live display so it could initi listener
   *
   */


  setLiveDisplay() {
    this.liveDisplayEl.addEventListener('dragover', this.liveDragOver);
    this.liveDisplayEl.addEventListener('dragenter', this.liveDragEnter);
    this.liveDisplayEl.addEventListener('dragleave', this.liveDragLeave);
    this.liveDisplayEl.addEventListener('drop', this.liveDragDrop);
  }


  liveDragOver(e) {
    // console.log('dragover');
    // console.log('CDO ', Data.getCurrentDragOver());
    e.preventDefault();
  }

  liveDragEnter(e) {
    Data.setcurrentDragOverDivId(that.liveDisplayEl.id);
    console.log('dragEnter', Data.getcurrentDragOverDivId());
    e.preventDefault();
  }

  liveDragLeave() {
    console.log('dragLeave');
    if (Data.getcurrentDragOverDivId() === that.liveDisplayEl.id) {
      console.log('true')
    }

  }

}
