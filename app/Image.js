console.log('image.js');


class ImageDiv extends HTML {
  constructor(parentId) {

    super();
    this.parentId = parentId;
    this.imageEl = undefined;
    this.resizer = undefined;
    this.id = 'img_' + Utils.generateRandomId();
    // this.sectionType = sectionType;
    var that = this;

    this.init();
    // document.addEventListener('hide-d-r-d', this.removeDragRresizeDelete.bind(this));
    // document.addEventListener('show-d-r-d', this.showDragRresizeDelete.bind(this));
  }


  // removeDragRresizeDelete(e) {
  //   console.log('custom event')
  //   console.log(e.detail);
  //   this.dragger.removeDragger();
  //   this.deleter.removeDeleter();
  //   this.resizer.removeResizer();
  //   Data.removeOutlines();
  // }

  // showDragRresizeDelete() {
  //   this.dragger.init();
  //   this.deleter.init();
  //   this.resizer.init();
  // }


  init() {
    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);

    this.imageEl = this.generateNewImageElement();

    document.getElementById(this.parentId).appendChild(this.imageEl);


    console.log('child Appended');

    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);

    super.setDraggerResizerDeleter();
    super.addClickHoverEvents();


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
    imageElement.style.objectFit = 'fill';
    imageElement.src = './app/asset/imgPlaceholder.png';

    imageElement.addEventListener('mousedown', this.clickEvent.bind(this));



    return returnObject;
  }


  clickEvent(e) {
    // console.log('parentId', this.imageEl.id)
    e.stopPropagation();

    Data.setCurrentMouseClickElId(this.imageEl.id);
  }
}
