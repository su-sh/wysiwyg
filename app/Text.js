console.log('text.js');

class Text extends HTML {

  constructor(parentId) {
    super();
    this.parentId = parentId;
    console.log('parent id ', this.parentId)
    this.textEl = undefined;
    this.resizer = undefined;
    this.id = 'txt_' + Utils.generateRandomId();

    var that = this;

    this.init();
  }


  init() {

    this.textEl = this.createNewElement();


    this.textEl.style.textAlign = 'center';
    this.textEl.style.color = 'black';
    this.textEl.contentEditable = true;


    document.getElementById(this.parentId).appendChild(this.textEl);


    // HTML
    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);
    console.log('TextId', this.id)
    super.setDraggerResizerDeleter();
    super.addClickHoverEvents();

    console.log('Text child Appended')
    this.textEl.addEventListener('mousedown', this.mouseClick.bind(this));

    // this.textEl.addEventListener('dragover', this.dragOver.bind(this));
    // this.textEl.addEventListener('dragenter', this.dragEnter);
    // this.textEl.addEventListener('dragleave', this.dragLeave);
    // this.textEl.addEventListener('drop', this.dragDrop);

    // const resize = new Resizer(this.textEl);
    // const dragger = new Dragger(this.textEl);

  }


  //overwrite
  mouseClick(e) {
    e.stopPropagation();

    Data.setCurrentMouseClickElId(this.id)
  }

  dragOver(e) {

    e.stopPropagation();

    Data.setcurrentDragOverDivId(super.getHtmlId());
    console.log('DragOverSection: ', Data.getcurrentDragOverDivId())
    console.log('this is this', this.sectionEl.id);
  }

  createNewElement(sectionType) {
    let returnElement;
    returnElement = this.generateNewText();

    return returnElement;
  }


  generateNewText() {
    console.log('func generateNewSection');
    var returnObject = document.createElement('div');
    returnObject.innerHTML = 'EDIT THIS TEXT';

    returnObject.id = this.id;


    returnObject.style.width = '80%';
    returnObject.style.minHeight = '50px';

    //test
    // var colorArray = ['aqua', 'white', 'blue', 'black', 'yellow', 'pink', 'white'];
    // returnObject.style.backgroundColor = colorArray[Math.floor((Math.random() * 2) + 0)];

    returnObject.style.position = 'relative';

    return returnObject;
  }


}
