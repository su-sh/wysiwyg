console.log('colorMenuDiv');

let img = new Image();
img.src = './app/asset/Untitled.png';


console.log(img.src);
class ColorDivMenu {
  constructor() {
    this.colorPickerEl = undefined;

    this.colorPickerCanvasEl = undefined;
    this.csvContext = undefined;
    this.imageObj = undefined;
    this.init();
    // this.event();
  }


  init() {


    this.colorPickerEl = document.getElementById('div-color-picker');
    this.colorPickerCanvasEl = document.getElementById('div-cp-cvs');
    this.colorPickerCanvasEl.style.width = '150px';
    this.colorPickerCanvasEl.style.height = '150px';
    this.csvContext = this.colorPickerCanvasEl.getContext("2d");


    // use preloader
    this.imageObj = img;

    window.addEventListener("load", this.LoadImages.bind(this));



  }
  LoadImages() {

    this.csvContext.drawImage(this.imageObj, 0, 0, this.imageObj.width, this.imageObj.height,
      0, 0, this.colorPickerCanvasEl.width, this.colorPickerCanvasEl.height);


    this.colorPickerCanvasEl.addEventListener('click', this.getRgb.bind(this))
  }

  getRgb(e) {
    var x = e.x;
    var y = e.y;
    // console.log

    // set color now
    var canvasColor = this.csvContext.getImageData(x, y, 100, 100).data; // rgba e [0,255]
    var r = canvasColor[0];
    var g = canvasColor[1];
    var b = canvasColor[2];

    var ret = 'rgb(' + r + ',' + g + ',' + b + ')';
    console.log(ret);
  }
  event() {
    this.colorPickerCanvasEl.onmousemove = function (e) {
      // not so sure about these... might need to offset them or so

    }

  }

}
