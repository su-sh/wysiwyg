console.log("MenuElement.js");
const TAG = "MenuElement.js";

class MenuElement {
  constructor(id) {
    this.id = id;
    this.element = document.getElementById(id);
    this.eventListener();
  }


  // on drag start gets element type and then creates new element on drag end
  eventListener() {
    console.log("DragStart, MenuItem Id:", this.id);
    document.getElementById(this.id).addEventListener("dragend", this.createNewElement);
  }


  //Creates New Element Object
  createNewElement() {
    console.log("createNewElement() id: ", this.id);

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
