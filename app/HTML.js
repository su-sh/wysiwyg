console.log('HTML.js');

class HTML {
  constructor(parentId, tag) {
    this.parentId = parentId;
    this.tag = tag;
    this.id = undefined;
    this.children = [];
    this.style = [];




    this.positionX = undefined;
    this.positionY = undefined;
  }

  setHtmlId(id) {
    this.id = id;
  }
  getHtmlId() {
    return this.id;
  }


  setHtmlParentId(parentId) {
    this.parentId = parentId;
  }
  getHtmlParentId() {
    return this.parentId;
  }


  getChildernId() {
    return this.children;
  }
  setChildernId(childrenId) {
    this.children.push(childernId);
  }


  addClickHoverEvents() {
    document.getElementById(this.id).addEventListener('mouseover', this.mouseOver.bind(this));

    document.getElementById(this.id).addEventListener('mousedown', this.mouseClick.bind(this));
    document.getElementById(this.id).addEventListener('mousemove', this.mouseMove.bind(this));

  }

  mouseOver(e) {
    e.stopPropagation();
    Data.setCurrentMouseOverElId(this.id);
  }


  mouseClick(e) {

    e.stopPropagation();

    this.posX = e.clientX - document.getElementById(this.id).getBoundingClientRect().left + document.documentElement.scrollLeft;
    this.posY = e.clientY - document.getElementById(this.id).getBoundingClientRect().top + document.documentElement.scrollTop;
    console.log(this.posX, this.posY);
    Data.setCurrentMouseClickElId(this.id);
    console.log('MouseClick', Data.getCurrentMouseClickElId());


  }


  mouseMove(e) {
    // document.body.style.cursor = "move";
    // tag.element.style.left = (e.clientX - parentContainerPosition.x - posX) + "px";
    // tag.element.style.top = (e.clientY - parentContainerPosition.y - posY) + "px";
  }
}
