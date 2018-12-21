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
    console.log(this.downloadBtnEl);
    console.log(document.getElementById('live-display').innerHTML)

    let htmlContent = `
<!DOCTYPE <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Page Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

</head>
<body>

<div class="wysiwyg">

${document.getElementById('live-display').innerHTML}

</div>

</body>
</html>

`;
    this.download('index.html', htmlContent);
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
