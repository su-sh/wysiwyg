console.log('Download.js');

class GenerateHTML {
  constructor() {
    this.downloadBtnEl = undefined;
    this.init();
    this.addEvent();
  }

  init() {
    this.downloadBtnEl = document.getElementById('download-btn');
  }

  addEvent() {
    this.downloadBtnEl.addEventListener('mousedown', this.generateElement.bind(this));
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
