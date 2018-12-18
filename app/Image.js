console.log('image.js');


class Image extends HTML {
  constructor(parentId) {

    super();
    this.parentId = parentId;
    this.imageEl = undefined;
    this.resizer = undefined;
    this.id = Utils.generateRandomId();
    // this.sectionType = sectionType;
    var that = this;

    this.init();

  }



  init() {
    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);

    this.imageEl = this.generateNewImageElement();

    document.getElementById(this.parentId).appendChild(this.imageEl);


    console.log('child Appended')


    // this.imageEl.addEventListener('dragover', this.dragOver.bind(this));
    // this.imageEl.addEventListener('dragenter', this.dragEnter);
    // this.imageEl.addEventListener('dragleave', this.dragLeave);
    // this.imageEl.addEventListener('drop', this.dragDrop);

    const resize = new Resizer(this.imageEl);
    const dragger = new Dragger(this.imageEl);

  }

  generateNewImageElement() {

    var returnObject = document.createElement('div');
    returnObject.id = this.id;
    returnObject.style.position = 'relative';
    returnObject.style.width = '100px';
    returnObject.style.height = 'auto';


    var imageElement = document.createElement('img');
    returnObject.appendChild(imageElement);
    imageElement.style.width = 'inherit';
    imageElement.style.height = 'inherit';

    imageElement.src = './1.jpg';


    
    return returnObject;
  }
}