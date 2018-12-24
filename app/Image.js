console.log('image.js');


class ImageDiv extends HTML {
  constructor(parentId) {

    super();
    this.parentId = parentId;
    this.imageEl = undefined;
    this.resizer = undefined;
    this.id = 'img_' + Utils.generateRandomId();

    this.init();

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


  // creates&appends child then update parent
  init() {

    this.imageEl = this.generateNewImageElement();
    document.getElementById(this.parentId).appendChild(this.imageEl);
    console.log('child Appended');

    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);

    super.setDraggerResizerDeleter();
    super.addClickHoverEvents();
  }

  generateNewImageElement() {

    let returnObject = document.createElement('div');
    returnObject.id = this.id;
    returnObject.style.position = 'relative';
    returnObject.style.width = '100px';
    returnObject.style.height = 'auto';


    let imageElement = document.createElement('img');
    returnObject.appendChild(imageElement);
    imageElement.style.width = 'inherit';
    imageElement.style.height = 'inherit';
    imageElement.style.objectFit = 'fill';
    imageElement.src = './app/asset/imgPlaceholder.png';

    imageElement.addEventListener('mousedown', this.clickEvent.bind(this));

    return returnObject;
  }


  clickEvent(e) {
    e.stopPropagation();
    Data.setCurrentMouseClickElId(this.imageEl.id);
  }
}
