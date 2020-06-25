var restartBtn = document.getElementById("restart");
var point = document.querySelector(".point");
var objectsToFind = document.querySelector("#objectsToFind");
var images = document.querySelectorAll(".images");
var clickedImage = null;
//console.log("Variable eventListener ", images);

//Take the id's of the images
var image = [];
for (let i = 0; i < images.length; i++) {
  const element = images[i].id;
  //console.log(element);
  image.push(element);
}
//Formated string
console.log("array of images", image);
const formatedString = image.toString().replace(/,/gi, " * ");
objectsToFind.innerHTML = formatedString;
console.log("array of images :::", image);
//Show the names (id's) of the objects to the HTML

//Remove image for the background
function removeObject(clickedImage) {
  clickedImage.classList.replace("images", "hideImage");
  /*var imageId = clickedImage.getAttribute("id");
  return imageId;*/
}

//Creates the popup window when the palyer wins
function createNextLevelButton() {
  var paraNextLevel = document.createElement("p");
  var urlcourante = document.location.href;
  var urlcourante = urlcourante.replace(/\/$/, "");
  console.log(urlcourante);
  var queue_url = urlcourante.substring(urlcourante.lastIndexOf("/") + 1);
  if (queue_url === "level-1.html") {
    paraNextLevel.innerHTML = `<div class="message1-2"><span>Good job!</span> </div> 
    <div class='div-message-lost'><button class="btn-nextlevel" id="btn-nextlevel" onclick="location.href='./level-2.html'">Next level</button></div>`;
  } else if (queue_url === "level-2.html") {
    paraNextLevel.innerHTML = `<div class="message1-2"><span>Very good!</span> </div> 
    <div class='div-message-lost'><button class="btn-nextlevel" id="btn-nextlevel" onclick="location.href='./level-3.html'">Next level</button></div>`;
  } else if (queue_url === "level-3.html") {
    paraNextLevel.innerHTML = `<div class="message1-2"><span>Bravo !!!</span> </div>
    <div class="message1-2"><span>You won !!</span> </div>  
    <div class='div-message-lost'><button class="btn-nextlevel" id="btn-nextlevel" onclick="location.href='./index.html'">HOME</button></div>`;
  }
  return paraNextLevel.innerHTML;
}
function createMessageLost() {
  var parMessageLost = document.createElement("p");
  parMessageLost.innerHTML = `<div class='div-message-lost'><button class="btn-message-lost" id="btn-start" onclick="window.location.reload();">TRY AGAIN</button>
    <button class="btn-message-lost" id="btn-home" onclick="location.href='./index.html'">HOME</button></div>`;
  return parMessageLost.innerHTML;
}

//Initialise the variable of the points
var points = 0;
//Update the images array et increment the points
function compareImages(imageId) {
  for (let i = 0; i < image.length; i++) {
    if (image[i] === imageId) {
      image.splice(i, 1);
      points++;
      const formatedString = image.toString().replace(/,/gi, " - ");
      objectsToFind.innerHTML = formatedString;
      point.innerHTML = points;
    }
  }

  return image;
}

var showMessage = document.querySelector(".popup");

//Popup message if win or lost
function showMessage1(image) {
  console.log("show message function ", image);
  if (image.length === 0) {
    clearInterval(timer);
    showMessage.classList.toggle("visible");
    showMessage.innerHTML = "";
    showMessage.innerHTML = createNextLevelButton();
  }
}

let randomPosition = function (start, end) {
  let random = Math.floor(Math.random() * (end - start + 1) + start);

  return random;
};

// let positionX =randomPosition(200,400)
// let positionY=randomPosition(200,400)

function imagesPosition(element, x, y) {
  element.style.position = "absolute";
  element.style.left = x + "px";
  element.style.top = y + "px";
}

//Timer
var time = 30;

var timer = setInterval(countdown, 1000);
function countdown() {
  if (time > 0) {
    time--;
    for (let i = 0; i < images.length; i++) {
      const element = images[i];
      let myX = randomPosition(34, 400);
      console.log(myX);
      let myY = randomPosition(34, 400);
      console.log(myY);
      imagesPosition(element, myX, myY);
    }
  } else if (time === 0) {
    clearInterval(timer);
    showMessage.classList.toggle("visible");
    showMessage.innerHTML = "";
    showMessage.innerHTML = createMessageLost();
  }
  if (time < 10) {
    document.getElementById("timer").innerHTML = `Timer : 0${time}`;
  } else {
    document.getElementById("timer").innerHTML = `Timer : ${time}`;
  }
}

function handleClickImage(evt) {
  // 1 recup id image clicked
  clickedImage = evt.target;
  removeObject(clickedImage);
  showMessage1(compareImages(clickedImage.id));
  // compare id image clicked avec les id des contenus dans ton array d'is
}

images.forEach((image) => {
  image.addEventListener("click", handleClickImage);
});

// function a() {
//   return 42;
// }

// function b(numb) {
//   return numb > 10 ? "yes" : "no";
// }

// b(a());

// const n = a();
// const res = b(n);
