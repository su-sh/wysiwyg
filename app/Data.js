class Data {
  constructor() {
    this.currentMenuDrag = undefined;
    this.currentDragOverDivId = undefined;

    this.domTree = [];
    this.domList = [];


    this.removeContentEditStart = false;

    /*=============================================
    =            mouseOver            =
    =============================================*/
    this.currentMouseOverElId = undefined;
    this.prevMouseOverElId = undefined;
    /*=====  End of mouseOver  ======*/

    /*=============================================
    =            mouseClicked            =
    =============================================*/

    this.currentMouseClickElId = undefined;
    this.prevMouseClickElId = undefined;

    /*=====  End of mouseClicked  ======*/

  }

  static removeOutlines() {
    document.getElementById(this.currentMouseOverElId).style.outlineStyle = "";
    console.log('outout');

    document.getElementById(this.currentMouseClickElId).style.outline = '';
    console.log('outout');

    console.log('outoutout')
    document.getElementById(this.currentMouseClickElId).style.zIndex = "";

  };

  static makeContentEditableFalse() {
    // contenteditable="true"
    let contentEditableItems = document.querySelectorAll('[contenteditable=true]');

    for (var i = 0; i < contentEditableItems.length; i++) {
      console.log('editables', contentEditableItems[i]);

    }
  }


  static showOutlines() {

    this.setCurrentMouseOverElId(this.currentMouseOverElId);
    this.setCurrentMouseClickElId(this.currentMouseClickElId);
  }

  static getCurrentMenuDrag() {
    // return this.currentMenu;
    return this.currentMenu;
  }

  static setCurrentMenuDrag(data) {
    this.currentMenu = data;
  }

  /*=============================================
  =            Dom Tree getter and setter            =
  =============================================*/
  static getDomTree() {
    return this.domTree;
  }

  static pushDomTree(obj) {
    this.domTree.push(obj);
  }
  /*=====  End of Dom Tree getter and setter  ======*/

  /*=============================================
  =            Dom list             =
  =============================================*/

  /*=====  End of Dom list   ======*/

  /*=============================================
  =            GetSet current DragOverElement            =
  =============================================*/

  static getcurrentDragOverDivId() {
    return this.currentDragOverDivId;
  }

  static setcurrentDragOverDivId(cdo) {
    this.currentDragOverDivId = cdo;
  }

  /*=====  End of GetSet current DragOverElement  ======*/











  /*=============================================
  =            MouseOver Div hover            =
  =============================================*/

  static setCurrentMouseOverElId(mouseOverElId) {
    this.prevMouseOverElId = this.currentMouseOverElId;
    this.currentMouseOverElId = mouseOverElId;

    // if (document.getElementById(this.currentMouseOverElId))

    if (this.currentMouseClickElId != this.currentMouseOverElId) {
      document.getElementById(this.currentMouseOverElId).style.outline =
        "1px solid black";

      document.getElementById(this.currentMouseOverElId).style.outlineStyle =
        "dashed";

      // document.getElementById(this.currentMouseOverElId).style.opacity = '.8';
      // child node
      // let child = document.getElementById(this.currentMouseOverElId).childNodes;

    }

    if (this.currentMouseClickElId != this.prevMouseOverElId) {
      document.getElementById(this.prevMouseOverElId).style.outline = "none";
      document.getElementById(this.prevMouseOverElId).style.outlineStyle =
        "none";
      document.getElementById(this.currentMouseOverElId).style.opacity = '';

    }

    console.log("FromSetCurrentMouseOver: Current", this.currentMouseOverElId);
    console.log("FromSetCurrentMouseOver: Prev", this.prevMouseOverElId);
  }

  static getCurrentMouseOverElId() {
    return this.currentMouseOverElId;
  }
  resetMouseOver() {}

  /*=====  End of MouseOver Div hover  ======*/




















  /*=============================================
  =            MouseClick            =
  =============================================*/

  static setCurrentMouseClickElId(mouseClickElId) {
    this.prevMouseClickElId = this.currentMouseClickElId;
    this.currentMouseClickElId = mouseClickElId;

    console.log(
      "Data=",
      this.currentMouseClickElId,
      document.getElementById(this.currentMouseClickElId)
    );
    document.getElementById(this.currentMouseClickElId).style.outline =
      "1px solid green";
    document.getElementById(this.currentMouseClickElId).style.zIndex = "100";

    if (this.prevMouseClickElId != this.currentMouseClickElId) {
      document.getElementById(this.prevMouseClickElId).style.outline = "";
      document.getElementById(this.currentMouseClickElId).style.zIndex = "0";
    }
  }

  static getCurrentMouseClickElId() {
    return this.currentMouseClickElId;
  }

  static getRemoveContentEditStart() {
    return this.removeContentEditStart;
  }
  static setRemoveContentEditStart(bool) {
    this.removeContentEditStart = bool;
  }
  /*=====  End of MouseClick  ======*/
}
