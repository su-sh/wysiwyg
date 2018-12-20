console.log('EditText.js');

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

  }


  addEvent() {
    this.centerAlignTextEL.addEventListener('mousedown', this.changeCenterAlignText.bind(this));
    this.justifyAlignTextEl.addEventListener('mousedown', this.changeJustifyAlignText);
    this.leftAlignText.addEventListener('mousedown', this.changeLeftAlignText.bind(this));
    this.rightAlignTextEl.addEventListener('mousedown', this.changeRightAlignText);



    this.boldTextEl.addEventListener('mousedown', this.changeBoldText);
    this.italicTextEl.addEventListener('mousedown', this.changeItalicText);
    this.underlineTextEl.addEventListener('mousedown', this.changeUnderlineText);



    this.fontFamilyMenuSelect.addEventListener('change', this.changeFontText.bind(this));
    this.fontSizeMenuInputEl.addEventListener('change', this.changeTextSize.bind(this));
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
      document.getElementById(Data.getCurrentMouseClickElId()).style.fontWeight = 'bold';
    }
  }

  changeItalicText() {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {
      document.getElementById(Data.getCurrentMouseClickElId()).style.fontStyle = 'italic';
    }

  }

  changeUnderlineText() {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {
      document.getElementById(Data.getCurrentMouseClickElId()).style.textDecoration = 'underline';
    }
  }


  /*=====  End of Text alignment  ======*/








  /*=============================================
  =            TextAlign            =
  =============================================*/



  changeCenterAlignText() {

    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {
      if (document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign != 'center') {
        // this.centerAlignTextEL.style.backgroundColor = 'white';
        this.centerAlignTextEL.style.backgroundColor = 'white';
        console.log(this.centerAlignTextEL.id);
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = 'center';
      } else {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = '';
        this.centerAlignTextEL.style.backgroundColor = 'inherit';
      }

    }
    console.log(Utils.getIdType(Data.getCurrentMouseClickElId()));
  }

  changeJustifyAlignText() {
    console.log('inside Justify');
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {
      if (document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign != 'justify') {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = 'justify';
      } else {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = '';
      }
    }
  }

  changeAlign(type) {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {

      if (document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign != type) {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = type;
      } else {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = '';
      }
    }
  }

  changeLeftAlignText() {
    console.log('changeLeft');
    this.changeAlign('left');
    // if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {

    //   if (document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign != 'left') {
    //     document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = 'left';
    //   } else {
    //     document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = '';
    //   }
    // }
  }
  changeRightAlignText() {
    console.log('changeRight')
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {

      if (document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign != 'right') {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = 'right';
      } else {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = '';
      }
    }
  }

  /*=====  End of TextAlign  ======*/


}
