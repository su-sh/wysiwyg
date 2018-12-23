console.log('button.js');

class Button extends HTML {
  constructor(parentId) {
    super();
    this.parentId = parentId;
    console.log('parent id ', this.parentId)
    this.buttonEl = undefined;
    this.resizer = undefined;
    this.id = Utils.generateRandomId();
    this.init();

    this.defaultColor = undefined;
    this.hoverColor = undefined;
  }

  init() {
    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);

    this.buttonEl = this.createDefaultButtonElement();

    document.getElementById(this.parentId).appendChild(this.buttonEl);

    console.log('Button child Appended')


    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);
    super.setDraggerResizerDeleter();
    super.addClickHoverEvents();



    // this.buttonEl.addEventListener('dragover', this.dragOver.bind(this));
    // this.buttonEl.addEventListener('dragenter', this.dragEnter);
    // this.buttonEl.addEventListener('dragleave', this.dragLeave);
    // this.buttonEl.addEventListener('drop', this.dragDrop);

    // const resize = new Resizer(this.buttonEl);
    // const dragger = new Dragger(this.buttonEl);

  }

  createDefaultButtonElement() {
    console.log('ButtonClass: Create new Buttonel');
    var returnObject = document.createElement('a');
    returnObject.id = this.id;
    returnObject.innerHTML = 'Button';
    returnObject.style.backgroundColor = '#44c767';

    returnObject.style.borderRadius = '28px';

    returnObject.style.border = '1px solid #18ab29';
    returnObject.style.display = 'inline-block';

    returnObject.style.cursor = 'pointer';
    returnObject.style.textAlign = 'middle';

    returnObject.style.fontFamily = 'Arial';

    returnObject.style.fontSize = '17px';

    returnObject.style.padding = '16px 31px';
    returnObject.style.textDecoration = 'none';

    returnObject.style.shadow = '0px 1px 0px #2f6627';

    return returnObject;
  }

}
