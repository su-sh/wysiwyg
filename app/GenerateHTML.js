console.log('Download.js');

let thatGenerate;
class GenerateHTML {
  constructor() {
    this.downloadBtnEl = undefined;
    this.contentEditableItems = undefined;
    this.init();
    this.addEvent();
    thatGenerate = this;
  }

  init() {
    this.contentEditableItems = [];
    this.downloadBtnEl = document.getElementById('download-btn');
  }

  addEvent() {
    // this.downloadBtnEl.addEventListener('mousedown', this.generateElement.bind(this));
    this.downloadBtnEl.addEventListener('mousedown', this.removeContentEditable.bind(this));

  }


  removeContentEditable() {
    this.startRemove().then(this.generateElement.bind(this));

  }

  startRemove(x) {
    var promise = new Promise(function (resolve, reject) {
      thatGenerate.contentEditableItems = [];
      thatGenerate.contentEditableItems = document.querySelectorAll('[contenteditable=true]');

      for (var i = 0; i < thatGenerate.contentEditableItems.length; i++) {
        console.log('editables', thatGenerate.contentEditableItems[i]);
        thatGenerate.contentEditableItems[i].setAttribute("contenteditable", false);
      }


      resolve();
    });
    return promise;
  }

  generateElement() {
    // Create the event
    var hideEvent = new CustomEvent("hide-d-r-d", {
      "detail": "Hide Drag Resize Delete "
    });

    document.dispatchEvent(hideEvent);

    console.log(this.downloadBtnEl);
    console.log(document.getElementById('live-display').innerHTML)

    let htmlContent = `
<!DOCTYPE <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Page Title</title>
  <style>
  html, body {
  padding: 0;
  margin:0;
  }
  </style>

</head>
<body>

<div class="wysiwyg">

${document.getElementById('live-display').innerHTML}

</div>

</body>
</html>

`;
    this.download('index.html', htmlContent);

    for (let i = 0; i < thatGenerate.contentEditableItems.length; i++) {
      thatGenerate.contentEditableItems[i].setAttribute("contenteditable", true);

    }


    var showEvent = new CustomEvent("show-d-r-d", {
      "detail": "Show Drag Resize Delete "
    });

    document.dispatchEvent(showEvent);

  }

  download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

}
