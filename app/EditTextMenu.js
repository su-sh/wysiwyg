console.log('EditText.js');

class EditTextMenu {
  constructor() {


    this.centerAlignTextEL = undefined;
    this.justifyAlignTextEl = undefined;
    this.leftAlignText = undefined;
    this.rightAlignTextEl = undefined;

    this.boldTextEl = undefined;
    this.italicTextEl = undefined;
    this.underlineTextEl = undefined;

    this.fontFamilyMenu = undefined;


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

    this.fontFamilyMenu = document.getElementById('font-family-menu');
  }


  addEvent() {
    this.centerAlignTextEL.addEventListener('mousedown', this.changeCenterAlignText);
    this.justifyAlignTextEl.addEventListener('mousedown', this.changeJustifyAlignText);
    this.leftAlignText.addEventListener('mousedown', this.changeLeftAlignText);
    this.rightAlignTextEl.addEventListener('mousedown', this.changeRightAlignText);



    this.boldTextEl.addEventListener('mousedown', this.changeBoldText);
    this.italicTextEl.addEventListener('mousedown', this.changeItalicText);
    this.underlineTextEl.addEventListener('mousedown', this.changeUnderlineText)

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
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = 'center';
      } else {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = '';
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


  changeLeftAlignText() {
    console.log('changeLeft');
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'txt') {

      if (document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign != 'left') {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = 'left';
      } else {
        document.getElementById(Data.getCurrentMouseClickElId()).style.textAlign = '';
      }
    }
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