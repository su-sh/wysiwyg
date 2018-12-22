console.log("UploadImageMenu");

class UploadImageMenu {
  constructor() {
    // this.addImgInputEl = undefined;

    this.addImgSrcInputEl = undefined;
    this.addImgSrcBtn = undefined;

    this.removeImgEl = undefined;
    this.init();
    this.addEvent();
  }

  init() {
    // this.addImgInputEl = document.getElementById("add-image");

    this.addImgSrcInputEl = document.getElementById("add-img-url");;
    this.addImgSrcBtn = document.getElementById("add-img-btn");;

    this.removeImgEl = document.getElementById("remove-image");
  }

  addEvent() {
    // this.addImgInputEl.addEventListener("change", this.readImg.bind(this));
    this.addImgSrcBtn.addEventListener('mousedown', this.readImgSrc.bind(this));

    this.removeImgEl.addEventListener("mousedown", this.removeImg.bind(this));
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


  readImg(e) {

  }
  /*
  readImg(evt) {
    // console.log(this.addImgInputEl.files[0], e.target)

    if (
      Utils.getIdType(Data.getCurrentMouseClickElId()) === "img" ||
      Utils.getIdType(Data.getCurrentMouseClickElId()) === "div"
    ) {
      var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

      // FileReader support
      if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function() {
          if (Utils.getIdType(Data.getCurrentMouseClickElId()) === "img") {
            var imgObj = document.getElementById(
              Data.getCurrentMouseClickElId()
            ).childNodes[0];
            console.log(imgObj);
            imgObj.src = fr.result;
          }

          if (Utils.getIdType(Data.getCurrentMouseClickElId()) === "div") {
            var imgObj = document.getElementById(
              Data.getCurrentMouseClickElId()
            );
            console.log("asdf", imgObj);
            imgObj.style.backgroundImage = `url(${fr.result})`;
          }
          // document.getElementById(outImage).src = fr.result;
        };
        fr.readAsDataURL(files[0]);
        console.log(fr.readAsDataURL(files[0]));
      } else {
      }
    }
  }
  */
}