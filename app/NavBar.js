console.log('navMenu.js')

class NavBar extends HTML {

  constructor(parentId, navType) {
    super(parentId, 'div');
    this.parentId = parentId;
    this.navBarEl = undefined;
    this.resizer = undefined;
    this.id = 'nav_' + Utils.generateRandomId();
    this.navType = navType;

    this.init();
  }



  init() {
    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);

    this.navBarEl = this.createNewElement(this.navType);

    document.getElementById(this.parentId).appendChild(this.navBarEl);

    document.querySelector(`#${this.id} ul`).className += 'clearfix';
    document.querySelector(`#${this.id} ul`).style.listStyleType = 'none';
    document.querySelector(`#${this.id} ul`).style.margin = '0';
    document.querySelector(`#${this.id} ul`).style.padding = '0';
    document.querySelector(`#${this.id} ul`).style.overflow = 'hidden';
    document.querySelector(`#${this.id} ul`).style.backgroundColor = 'black';


    let nodes = document.querySelector(`#${this.id} ul`).childNodes;
    console.log('nodes', nodes);
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.float = 'left';
      // li a
      nodes[i].childNodes[0].style.display = 'block';
      nodes[i].childNodes[0].style.color = 'white';
      nodes[i].childNodes[0].style.textAlign = 'center';
      nodes[i].childNodes[0].style.padding = '14px 16px';
      nodes[i].childNodes[0].style.textDecoration = 'none';
    }



    super.setHtmlParentId(this.parentId);
    super.setHtmlId(this.id);
    super.setDraggerResizerDeleter();
    super.addClickHoverEvents();

    console.log('child appended', document.getElementById(this.parentId).style.position);
  }


  createNewElement(navType) {
    let returnElement;
    switch (navType) {
      case 1:
        break;

      default:
        returnElement = this.generateNewNavBar();
        break;
    }
    return returnElement;
  }



  generateNewNavBar() {
    var returnObject = document.createElement('div');
    returnObject.id = this.id;
    returnObject.style.width = '100%';
    returnObject.style.height = '30px;'
    returnObject.style.position = 'relative';

    var ulEl = document.createElement('ul');

    ulEl.appendChild(this.addLi('Home'));
    ulEl.appendChild(this.addLi('Profile'));
    ulEl.appendChild(this.addLi('About'));

    returnObject.appendChild(ulEl);

    return returnObject;
  }


  /*=============================================
  =            Takes Content and gives out listItem            =
  =============================================*/
  addLi(contentText) {
    var liEl = document.createElement('li');
    var a1 = document.createElement('a');
    a1.href = '#';
    a1.innerHTML = contentText;
    a1.contentEditable = true;
    liEl.appendChild(a1);

    return liEl;
  }

}
