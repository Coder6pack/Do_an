
  var i = 0;
  var images = [];
  var time = 1000;

  images[0] = "img/images1.png";
  images[1] = "img/images2.png";
  images[2] = "img/images3.png";

  function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
    setTimeout("changeImg()", time);
  }

  window.onload = changeImg;