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
    this.event();
  }


  init() {


    this.colorPickerEl = document.getElementById('div-color-picker');
    this.colorPickerCanvasEl = document.getElementById('div-cp-cvs');
    // this.colorPickerCanvasEl.style.width = '150px';
    // this.colorPickerCanvasEl.style.height = '150px';
    this.csvContext = this.colorPickerCanvasEl.getContext("2d");


    // use preloader
    this.imageObj = img;

    window.addEventListener("load", this.LoadImages.bind(this));


  }
  LoadImages() {

    console.log(this.imageObj.width, this.imageObj.height)
    this.csvContext.drawImage(this.imageObj, 0, 0);


    // this.colorPickerCanvasEl.addEventListener('click', this.getRgb.bind(this))
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
    this.colorPickerCanvasEl.addEventListener('mousedown', this.getRGB.bind(this));





  }

  getRGB(e) {
    var offsetLeft = document.getElementById('div-cp-cvs').offsetLeft;
    var offsetTop = document.getElementById('div-cp-cvs').offsetTop;

    var x = e.pageX - offsetLeft;
    var y = e.pageY - offsetTop;

    x = e.clientX - this.colorPickerCanvasEl.getBoundingClientRect().left;
    y = e.clientY - this.colorPickerCanvasEl.getBoundingClientRect().top;
    console.log(x, y)
    /*

    var x = e.clientX;
    var y = e.clientY;
    var rect = this.colorPickerCanvasEl.getBoundingClientRect();

    x = e.Pa - rect.left;
    y = e.clientY - rect.top;

    */

    // let x, y;
    // if (e.offsetX) {
    //   x = e.offsetX;
    //   y = e.offsetY;
    // } else if (e.layerX) {
    //   x = e.layerX;
    //   y = e.layerY;
    // }

    // var x = e.clientX - this.colorPickerCanvasEl.getBoundingClientRect().left;
    // var y = e.clientY - this.colorPickerCanvasEl.getBoundingClientRect().top;
    // set color now
    var canvasColor = this.csvContext.getImageData(x, y, 1, 1).data; // rgba e [0,255]
    var r = canvasColor[0];
    var g = canvasColor[1];
    var b = canvasColor[2];

    var print = 'rgb(' + r + ',' + g + ',' + b + ')';
    console.log(print);
    // color.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  }

}
