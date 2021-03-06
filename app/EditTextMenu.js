console.log('EditText.js');

let img1 = new Image();
img1.src = "./app/asset/Untitled.png";

class EditTextMenu {
  constructor() {

    this.that = this;
    this.centerAlignTextEL = undefined;
    this.justifyAlignTextEl = undefined;
    this.leftAlignText = undefined;
    this.rightAlignTextEl = undefined;

    this.boldTextEl = undefined;
    this.italicTextEl = undefined;
    this.underlineTextEl = undefined;

    this.fontFamilyMenuSelect = undefined;

    this.fontColorMenuEl = undefined;
    this.fontColorCanvasEl = undefined;
    this.fontColorCanvasContext = undefined;



    this.init();
    this.addEvent();

  }

  init() {
    this.centerAlignTextEL = document.getElementById('center-align-text');
    this.justifyAlignTextEl = document.getElementById('justify-align-text');
    this.leftAlignText = document.getElementById('left-align-text');
    this.rightAlignTextEl = document.getElementById('right-align-text');

    this.boldTextEl = document.getElementById('bold-text');
    this.italicTextEl = document.getElementById('italic-text');
    this.underlineTextEl = document.getElementById('underline-text');

    this.fontFamilyMenuSelect = document.getElementById('text-font-select');
    this.fontSizeMenuInputEl = document.getElementById('text-size-select');

    this.fontColorMenuEl = document.getElementById('color-text');
    this.fontColorCanvasEl = document.getElementById('txt-cp-cvs');
    this.fontColorCanvasContext = this.fontColorCanvasEl.getContext("2d");




    window.addEventListener("load", this.loadImage.bind(this));

  }


  addEvent() {
    this.centerAlignTextEL.addEventListener('mousedown', this.changeCenterAlignText.bind(this));
    this.justifyAlignTextEl.addEventListener('mousedown', this.changeJustifyAlignText.bind(this));
    this.leftAlignText.addEventListener('mousedown', this.changeLeftAlignText.bind(this));
    this.rightAlignTextEl.addEventListener('mousedown', this.changeRightAlignText.bind(this));

    this.boldTextEl.addEventListener('mousedown', this.changeBoldText);
    this.italicTextEl.addEventListener('mousedown', this.changeItalicText);
    this.underlineTextEl.addEventListener('mousedown', this.changeUnderlineText);

    this.fontFamilyMenuSelect.addEventListener('change', this.changeFontText.bind(this));
    this.fontSizeMenuInputEl.addEventListener('change', this.changeTextSize.bind(this));

    this.fontColorMenuEl.addEventListener('mousedown', this.hideShow.bind(this));
    // this.fontColorMenuEl.addEventListener('dblclick', this.inheritColor.bind(this));



    this.fontColorCanvasEl.addEventListener(
      "mousedown",
      this.setRGB.bind(this)
    );

  }



  loadImage() {
    this.fontColorCanvasContext.drawImage(img1, 0, 0);
  }

  hideShow() {
    if (this.fontColorCanvasEl.style.display == "none") {
      this.fontColorCanvasEl.style.display = "";
    } else {
      this.fontColorCanvasEl.style.display = "none";
    }
  }

  setRGB(e) {
    var offsetLeft = document.getElementById("txt-cp-cvs").offsetLeft;
    var offsetTop = document.getElementById("txt-cp-cvs").offsetTop;

    var x = e.pageX - offsetLeft;
    var y = e.pageY - offsetTop;

    x = e.clientX - this.fontColorCanvasEl.getBoundingClientRect().left;
    y = e.clientY - this.fontColorCanvasEl.getBoundingClientRect().top;
    console.log(x, y);

    var canvasColor = this.fontColorCanvasContext.getImageData(x, y, 1, 1).data; // rgba e [0,255]
    var r = canvasColor[0];
    var g = canvasColor[1];
    var b = canvasColor[2];

    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    console.log(rgb);
    // color.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {
      console.log('changeColorDiv', rgb);
      document.getElementById(Data.getCurrentMouseClickElId()).style.color = rgb;

      // document.getElementById(Data.getCurrentMouseClickElId()).style.backgroundColor = rgb;
    }
  }

  changeFontText() {
    this.setFont(this.fontFamilyMenuSelect.value);
  }

  setFont(fontFamily) {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {
      console.log('bold')
      document.getElementById(Data.getCurrentMouseClickElId()).style.fontFamily = fontFamily;
      this.fontFamilyMenuSelect.style.fontFamily = fontFamily;
    }
  }

  changeTextSize() {
    this.setTextSize(this.fontSizeMenuInputEl.value);
  }

  setTextSize(textSize) {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {
      console.log('bold')
      document.getElementById(Data.getCurrentMouseClickElId()).style.fontSize = textSize;
      this.fontSizeMenuInputEl.style.fontFamily = this.fontFamilyMenuSelect.style.fontFamily;
    }
  }


  /*=============================================
  =            Text alignment            =
  =============================================*/

  changeBoldText() {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {
      console.log('bold')
      if (document.getElementById(Data.getCurrentMouseClickElId()).style.fontWeight != 'bold') {
        document.getElementById(Data.getCurrentMouseClickElId()).style.fontWeight = 'bold';
      } else {
        document.getElementById(Data.getCurrentMouseClickElId()).style.fontWeight = '';
      }
    }

  }

  changeItalicText() {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {

      if (document.getElementById(Data.getCurrentMouseClickElId()).style.fontStyle != 'italic') {
        document.getElementById(Data.getCurrentMouseClickElId()).style.fontStyle = 'italic';
      } else {
        document.getElementById(Data.getCurrentMouseClickElId()).style.fontStyle = '';
      }

    }

  }

  changeUnderlineText() {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {

      if (document.getElementById(Data.getCurrentMouseClickElId()).style.textDecoration != 'underline') {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textDecoration = 'underline';
      } else {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textDecoration = '';
      }


    }
  }

  /*=====  End of Text alignment  ======*/





  /*=============================================
  =            TextAlign            =
  =============================================*/

  changeAlign(type) {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {

      if (document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign != type) {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = type;
      } else {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = '';
      }
    }
  }


  changeJustifyAlignText() {
    console.log('inside Justify');
    // justify
    this.changeAlign('justify');

  }



  changeCenterAlignText() {
    console.log('inside center');
    // center
    this.changeAlign('center');

  }



  changeLeftAlignText() {
    console.log('changeLeft');
    this.changeAlign('left');

  }

  changeRightAlignText() {
    console.log('changeRight')
    this.changeAlign('right');
  }
  /*=====  End of TextAlign  ======*/

}
