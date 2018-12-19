console.log('HTML.js');

class HTML {
  constructor(parentId, tag) {
    this.parentId = parentId;
    this.tag = tag;
    this.id = undefined;
    this.children = [];
    this.style = [];
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
    document.getElementById(this.id).addEventListener('click', this.mouseClick.bind(this));
  }

  mouseOver(e) {
    e.stopPropagation();
    Data.setCurrentMouseOverElId(this.id);
  }


  mouseClick() {
    console.log('mouseClick this is cool', this.id)
    Data.setCurrentMouseClickElId(this.id);
    console.log('MouseClick', Data.getCurrentMouseClickElId())
  }
}