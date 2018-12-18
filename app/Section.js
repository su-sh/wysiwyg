console.log('Section.js');

class Section extends HTML {

  constructor(parentId, sectionType) {
    super(parentId, 'div');
    this.parentId = parentId;
    this.sectionEl = undefined;
    this.resizer = undefined;
    this.id = 'div_'+Utils.generateRandomId();
    this.sectionType = sectionType;

    this.init();


  }

  init() {
    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);

    this.sectionEl = this.createNewElement(this.sectionType);

    document.getElementById(this.parentId).appendChild(this.sectionEl);

    super.addClickHoverEvents();
    if (document.getElementById(this.parentId).style.position === 'absolute') {
      console.log('ho', document.getElementById(this.parentId).style.position);
    }


    console.log('ho', document.getElementById(this.parentId).style.position);
    console.log('child Appended')


    this.sectionEl.addEventListener('dragover', this.dragOver.bind(this));
    this.sectionEl.addEventListener('dragenter', this.dragEnter);
    this.sectionEl.addEventListener('dragleave', this.dragLeave);
    this.sectionEl.addEventListener('drop', this.dragDrop);

    const resize = new Resizer(this.sectionEl);
    const dragger = new Dragger(this.sectionEl);




    /**
     *
     * Test
     *
     */

    // this.test();

  }


  test() {
    this.sectionEl.addEventListener('mouseover', this.testFunc.bind(this));
  }


  testFunc(e) {
    e.stopPropagation();
    Data.setCurrentMouseOver(this.sectionEl.id);
  }


  dragOver(e) {

    e.stopPropagation();
    Data.setcurrentDragOverDivId(super.getHtmlId());
    console.log('DragOverSection: ', Data.getcurrentDragOverDivId())
    console.log('this is this', this.sectionEl.id);

  }


  createNewElement(sectionType) {
    let returnElement;
    switch (sectionType) {
      case 1:
        console.log('type one');
        break;

      default:
        console.log('default ', this.id);
        returnElement = this.generateNewDefaultSection();
        break;
    }

    return returnElement;
  }



  generateNewDefaultSection() {
    console.log('func generateNewSection');
    var returnObject = document.createElement('div');
    returnObject.id = this.id;

    returnObject.style.width = '100%';
    returnObject.style.height = '100px';

    //test
    var colorArray = ['aqua', 'green', 'blue', 'black', 'yellow', 'pink', 'white'];
    returnObject.style.backgroundColor = colorArray[Math.floor((Math.random() * 2) + 0)];

    returnObject.style.position = 'relative';


    return returnObject;
  }






}