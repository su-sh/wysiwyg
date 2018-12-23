console.log("colorMenuDiv");

let img = new Image();
img.src = "./app/asset/Untitled.png";

// console.log(img.src);
class DivMenu {
  constructor() {

    this.flexRowEl = undefined;
    this.flexColumnEl = undefined;
    this.flexClearEl = undefined;

    this.widthExpandEl = undefined;
    this.widthShrinkEl = undefined;
    this.colorPickerEl = undefined;
    this.colorPickerCanvasEl = undefined;
    this.csvContext = undefined;
    this.imageObj = undefined;

    this.init();
    this.event();
  }

  init() {


    this.widthExpandEl = document.getElementById("div-expand-width");
    this.widthShrinkEl = document.getElementById("div-shrink-width");



    this.flexRowEl = document.getElementById("flex-row");
    this.flexColumnEl = document.getElementById("flex-column");
    this.flexClearEl = document.getElementById("flex-clear");


    this.colorPickerEl = document.getElementById("div-color-picker");
    this.colorPickerCanvasEl = document.getElementById("div-cp-cvs");

    this.csvContext = this.colorPickerCanvasEl.getContext("2d");

    // use preloader
    this.imageObj = img;

    console.log(this.colorPickerEl);

    window.addEventListener("load", this.loadImages.bind(this));
  }

  hideShow() {
    console.log("mouseDown");
    if (this.colorPickerCanvasEl.style.display == "none") {
      this.colorPickerCanvasEl.style.display = "";
    } else {
      this.colorPickerCanvasEl.style.display = "none";
    }
  }
  loadImages() {
    console.log(this.imageObj.width, this.imageObj.height);
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

    var ret = "rgb(" + r + "," + g + "," + b + ")";
    console.log(ret);
  }

  addFlexRow() {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'div') {
      console.log('row')

      document.getElementById(Data.getCurrentMouseClickElId()).style.display = 'flex';
      document.getElementById(Data.getCurrentMouseClickElId()).style.flexWrap = 'row';

    }

  }
  addFlexColumn() {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'div') {
      console.log('column')

      document.getElementById(Data.getCurrentMouseClickElId()).style.display = 'flex';
      document.getElementById(Data.getCurrentMouseClickElId()).style.flexWrap = 'column';

    }
  }

  clearFlex() {
    console.log('clearflex')

    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'div') {

      document.getElementById(Data.getCurrentMouseClickElId()).style.display = '';
      document.getElementById(Data.getCurrentMouseClickElId()).style.flexWrap = '';

    }
  }
  event() {


    this.flexRowEl.addEventListener('mousedown', this.addFlexRow.bind(this));
    this.flexColumnEl.addEventListener('mousedown', this.addFlexColumn.bind(this))
    this.flexClearEl.addEventListener('mousedown', this.clearFlex.bind(this));

    this.colorPickerEl.addEventListener("mousedown", this.hideShow.bind(this));
    this.colorPickerEl.addEventListener("dblclick", this.inheritColor.bind(this));


    this.colorPickerCanvasEl.addEventListener(
      "mousedown",
      this.setRGB.bind(this)
    );

    this.widthExpandEl.addEventListener('mousedown', this.expandDiv.bind(this));
    this.widthShrinkEl.addEventListener('mousedown', this.shrinkDiv.bind(this));
  }


  inheritColor() {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'div') {

      document.getElementById(Data.getCurrentMouseClickElId()).style.color = '';

      // document.getElementById(Data.getCurrentMouseClickElId()).style.backgroundColor = rgb;
    }

  }

  expandDiv() {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'div') {
      document.getElementById(Data.getCurrentMouseClickElId()).style.width = '100%';
    }
  }
  shrinkDiv() {
    // console.log(document.getElementById(Data.getCurrentMouseClickElId()).style.width)

    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'div') {

      document.getElementById(Data.getCurrentMouseClickElId()).style.width = '50%';
    }
  }
  setDivColor() {


  }

  setRGB(e) {
    var offsetLeft = document.getElementById("div-cp-cvs").offsetLeft;
    var offsetTop = document.getElementById("div-cp-cvs").offsetTop;

    var x = e.pageX - offsetLeft;
    var y = e.pageY - offsetTop;

    x = e.clientX - this.colorPickerCanvasEl.getBoundingClientRect().left;
    y = e.clientY - this.colorPickerCanvasEl.getBoundingClientRect().top;
    console.log(x, y);

    var canvasColor = this.csvContext.getImageData(x, y, 1, 1).data; // rgba e [0,255]
    var r = canvasColor[0];
    var g = canvasColor[1];
    var b = canvasColor[2];

    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    console.log(rgb);
    // color.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'div') {

      console.log('changeColorDiv', rgb);
      document.getElementById(Data.getCurrentMouseClickElId()).style.backgroundColor = rgb;
    }
  }
}
