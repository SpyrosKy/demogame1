var restartBtn = document.getElementById("restart");
var point = document.querySelector(".point");
var objectsToFind = document.querySelector("#objectsToFind");
console.log(objectsToFind);
console.log(point);
var images = document.querySelectorAll(".images");
console.log(images);

function imagesPosition(id, positionX, positionY) {
  id.style.position = "absolute";
  id.style.left = positionX + "px";
  id.style.top = positionY + "px";
}

var image = [];
for (let i = 0; i < images.length; i++) {
  const element = images[i].id;
  console.log(element);
  image.push(element);
}

console.log("array of images", image);
objectsToFind.innerHTML = image;

var total = 0;

function removeObject(event) {
  var clickedImage = event.target;
  clickedImage.classList.replace("images", "hideImage");
  console.log("this is the ", event.currentTarget);
  var imageId = clickedImage.getAttribute("id");

  for (let i = 0; i < image.length; i++) {
    if (image[i] === imageId) {
      image.splice(i, 1);
      total++;
    }
    console.log(image);
    objectsToFind.innerHTML = image;

    var showMessage = document.querySelector(".popup");
    console.log("show message function ");
    if (image.length == 0) {
      showMessage.classList.toggle("visible");
    }

    point.innerHTML = total;
  }
}

//Timer
var time = 30;
setInterval(countdown, 1000);
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
  }
  document.getElementById("timer").innerHTML = `Timer: ${time}`;
}

function restart() {
  document.location.reload(true);
}

images.forEach((image) => {
  image.addEventListener("click", removeObject);
});

restartBtn.onclick = restart;
