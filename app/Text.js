console.log('text.js');

class Text extends HTML {

  constructor(parentId) {
    super();
    this.parentId = parentId;
    this.textEl = undefined;
    this.resizer = undefined;
    this.id = 'txt_' + Utils.generateRandomId();

    this.init();
  }


  init() {

    this.textEl = this.createNewElement();

    this.textEl.style.textAlign = 'center';
    this.textEl.style.color = 'black';
    this.textEl.contentEditable = true;

    document.getElementById(this.parentId).appendChild(this.textEl);
    console.log('Text child Appended')

    // HTML
    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);
    super.setDraggerResizerDeleter();
    super.addClickHoverEvents();

    this.textEl.addEventListener('mousedown', this.mouseClick.bind(this));
  }


  //overwrite
  mouseClick(e) {
    e.stopPropagation();
    Data.setCurrentMouseClickElId(this.id);
  }

  dragOver(e) {
    e.stopPropagation();
    Data.setcurrentDragOverDivId(super.getHtmlId());
  }

  createNewElement(sectionType) {
    let returnElement;
    returnElement = this.generateNewText();
    return returnElement;
  }


  generateNewText() {
    var returnObject = document.createElement('div');

    returnObject.innerHTML = 'EDIT THIS TEXT';
    returnObject.id = this.id;
    returnObject.style.width = '80%';
    returnObject.style.maxWidth = '100%';
    returnObject.style.position = 'relative';

    return returnObject;
  }


}
