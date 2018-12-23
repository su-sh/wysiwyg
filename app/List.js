console.log("List.js");

class List extends HTML {
  constructor(parentId) {
    super();
    this.parentId = parentId;
    this.listEl = undefined;
    this.resizer = undefined;
    this.dragger = undefined;
    this.id = "list_" + Utils.generateRandomId();

    this.init();
    this.addEvent();
  }

  init() {

    this.listEl = this.createNewElement();

    console.log("list", this.listEl);
    document.getElementById(this.parentId).appendChild(this.listEl);


    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);
    super.setDraggerResizerDeleter();
    super.addClickHoverEvents();

  }

  createNewElement() {
    let returnEl = this.generateNewList();
    return returnEl;
  }

  generateNewList() {
    var returnObject = document.createElement("div");
    returnObject.id = this.id;
    // returnObject.style.width = "75%";
    returnObject.style.paddingLeft = "20px";

    var ulEl = document.createElement("ul");

    // liEl.appendChild(a1);
    ulEl.appendChild(this.addLi("Home"));
    returnObject.appendChild(ulEl);
    return returnObject;
  }

  addLi(contentText) {
    var liEl = document.createElement("li");
    liEl.contentEditable = true;
    liEl.innerHTML = "one";

    return liEl;
  }

  addEvent() {
    console.log("sushant");
    this.listEl.addEventListener("keydown", this.eventListener.bind(this));
  }

  eventListener(evt) {
    if (evt.keyCode == 13) {
      console.log("enter pressed");
      // creates new li node
      let newLi = this.addLi();

      this.listEl.firstElementChild.appendChild(newLi);
      console.log(this.listEl.firstElementChild);
      event.preventDefault();
    }
    if (evt.keyCode == 8) {
      // checks last li node if empty then removes node
      if (
        this.listEl.firstElementChild.childNodes.length > 1 &&
        this.listEl.firstElementChild.lastElementChild.innerHTML == ""
      ) {
        this.listEl.firstElementChild.removeChild(
          this.listEl.firstElementChild.lastChild
        );
      }

      console.log(this.listEl.firstElementChild.childNodes.length);
    }
  }
}
