console.log("MenuElement.js");
const TAG = "MenuElement.js";
// let thatMenuElement;
class MenuElement {
  constructor(id) {
    // thatMenuElement = this;
    this.id = id;
    this.element = document.getElementById(id);
    this.eventListener();
  }

  eventListener() {
    console.log("before id:", this.id);
    document
      .getElementById(this.id)
      .addEventListener("dragstart", this.showFunction);
    console.log('dragStart', this.id)
    document
      .getElementById(this.id)
      .addEventListener("dragend", this.createNewElement);
  }
  showFunction() {
    console.log("hello ", this.id);
  }

  createNewElement() {
    console.log("createNewEl ", this.id);
    // console.log('DOas',document.getElementById(Data.getCurrentDragOver()).tagName.toLowerCase());

    if (document.getElementById(Data.getcurrentDragOverDivId()) === "div") {
      console.log(
        "DO ",
        document.getElementById(Data.getcurrentDragOverDivId())
      );
      console.log(document.getElementById(Data.getcurrentDragOverDivId()));
    }
    switch (this.id) {
      case "create-section":
        console.log("test ", Data.getcurrentDragOverDivId());
        var section = new Section(Data.getcurrentDragOverDivId());

        break;

      case "create-text":
        console.log("create Text");
        var text = new Text(Data.getcurrentDragOverDivId());
        break;

      case "create-button":
        console.log("button created");
        var button = new Button(Data.getcurrentDragOverDivId());
        break;

      case "create-image":
        console.log("image created");
        var image = new ImageDiv(Data.getcurrentDragOverDivId());
        break;

      case "create-nav-bar":
        console.log(TAG, "create nav bar");
        var navBar = new NavBar(Data.getcurrentDragOverDivId());
        break;

      case "create-list":
        console.log(TAG, "create list element");
        var list = new List(Data.getcurrentDragOverDivId());
        break;

      default:
        break;
    }
  }
}
