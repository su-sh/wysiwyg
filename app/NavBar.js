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

    // console.log('this is new', document.querySelector(`#${this.id} ul`));
    // document.querySelector(`#${this.id} ul`).style.listStyleType = 'none ';
    // document.querySelector(`#${this.id} li`).className += 'nav-li';
    // document.querySelector(`#${this.id} li a`).className += 'nav-li-a';

    document.querySelector(`#${this.id} ul`).className += 'clearfix';
    document.querySelector(`#${this.id} ul`).style.listStyleType = 'none';
    document.querySelector(`#${this.id} ul`).style.margin = '0';
    document.querySelector(`#${this.id} ul`).style.padding = '0';

    document.querySelector(`#${this.id} ul`).style.overflow = 'hidden';
    document.querySelector(`#${this.id} ul`).style.backgroundColor = 'black';


    let nodes = document.querySelector(`#${this.id} ul`).childNodes;
    console.log('nodes', nodes)
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].style.float = 'left';

      // li a
      nodes[i].childNodes[0].style.display = 'block';
      nodes[i].childNodes[0].style.color = 'white';
      nodes[i].childNodes[0].style.textAlign = 'center';
      nodes[i].childNodes[0].style.padding = '14px 16px';

      nodes[i].childNodes[0].style.textDecoration = 'none';

    }

    super.addClickHoverEvents();

    if (document.getElementById(this.parentId).style.position === 'absolute') {
      console.log('navMenu', 'Should Apend as relative', document.getElementById(this.parentId).style.position);
    }

    console.log('ho', document.getElementById(this.parentId).style.position);
    console.log('child Appended')

  }


  createNewElement(navType) {
    let returnElement;
    switch (navType) {
      case 1:
        console.log('type one');
        break;

      default:
        console.log('default ', this.id);
        returnElement = this.generateNewNavBar();
        break;
    }

    return returnElement;
  }

  generateNewNavBar() {
    var returnObject = document.createElement('div');
    returnObject.id = this.id;
    returnObject.style.width = '100%';

    var ulEl = document.createElement('ul');


    // liEl.appendChild(a1);
    ulEl.appendChild(this.addLi('Home'));
    ulEl.appendChild(this.addLi('Profile'));
    ulEl.appendChild(this.addLi('About'));

    returnObject.appendChild(ulEl);

    console.log('retObj', returnObject)

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
