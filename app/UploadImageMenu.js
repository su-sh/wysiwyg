console.log("UploadImageMenu");

class UploadImageMenu {
  constructor() {
    // this.addImgInputEl = undefined;

    this.addImgSrcInputEl = undefined;
    this.addImgSrcBtn = undefined;

    this.imageObjectFitSelectEl = undefined;

    this.removeImgEl = undefined;
    this.init();
    this.addEvent();
  }

  init() {
    // this.addImgInputEl = document.getElementById("add-image");

    this.addImgSrcInputEl = document.getElementById("add-img-url");;
    this.addImgSrcBtn = document.getElementById("add-img-btn");;
    this.imageObjectFitSelectEl = document.getElementById('select-object-fill');
    this.removeImgEl = document.getElementById("remove-image");
  }

  addEvent() {
    // this.addImgInputEl.addEventListener("change", this.readImg.bind(this));
    this.addImgSrcBtn.addEventListener('mousedown', this.readImgSrc.bind(this));
    this.removeImgEl.addEventListener("mousedown", this.removeImg.bind(this));
    this.imageObjectFitSelectEl.addEventListener('change', this.changeObjectFit.bind(this));

  }


  changeObjectFit() {
    this.setObjectFit(this.imageObjectFitSelectEl.value);
  }

  setObjectFit(objFill) {
    if (Utils.getIdType(Data.getCurrentMouseClickElId()) === 'img') {
      console.log('obj Fill', objFill);

      // document.getElementById(Data.getCurrentMouseClickElId()).style.objectFit
      console.log(document.getElementById(Data.getCurrentMouseClickElId()).childNodes[0]);
      document.getElementById(Data.getCurrentMouseClickElId()).childNodes[0].style.objectFit = objFill;
      // document.getElementById(Data.getCurrentMouseClickElId()).style.fontFamily = fontFamily;
    }
  }


  readImgSrc() {
    console.log('ImgData', this.addImgSrcInputEl.value);
    if (
      Utils.getIdType(Data.getCurrentMouseClickElId()) === "img" ||
      Utils.getIdType(Data.getCurrentMouseClickElId()) === "div"
    ) {
      if (Utils.checkIfImgSrc(this.addImgSrcInputEl.value)) {
        if (Utils.getIdType(Data.getCurrentMouseClickElId()) === "img") {
          console.log('isImg');

          var imgObj = document.getElementById(
            Data.getCurrentMouseClickElId()
          ).childNodes[0];
          console.log(imgObj);
          imgObj.src = this.addImgSrcInputEl.value;
        }

        if (Utils.getIdType(Data.getCurrentMouseClickElId()) === "div") {
          console.log('isDiv')
          var imgObj = document.getElementById(
            Data.getCurrentMouseClickElId()
          );
          // console.log("asdf", imgObj);
          imgObj.style.backgroundImage = `url(${this.addImgSrcInputEl.value})`;

        }
      }
    }

  }

  removeImg() {
    console.log("removeImg");
    if (
      Utils.getIdType(Data.getCurrentMouseClickElId()) === "img" ||
      Utils.getIdType(Data.getCurrentMouseClickElId()) === "div"
    ) {
      if (Utils.getIdType(Data.getCurrentMouseClickElId()) === "img") {
        var imgObj = document.getElementById(Data.getCurrentMouseClickElId())
          .childNodes[0];
        // imgObj.src = './app/asset/imgPlaceholder.png';

        imgObj.src =
          "https://cdn4.iconfinder.com/data/icons/documents-letters-and-stationery/400/doc-14-512.png";
      }

      if (Utils.getIdType(Data.getCurrentMouseClickElId()) === "div") {
        var imgObj = document.getElementById(Data.getCurrentMouseClickElId());
        console.log("asdf", imgObj);
        imgObj.style.backgroundImage = ``;
      }
    }
  }

}
