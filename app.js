//Declaration variables
var restartBtn = document.getElementById("restart");
var point = document.querySelector(".point");
var objectsToFind = document.querySelector("#objectsToFind");
var images = document.querySelectorAll(".images");
console.log(images);
//With a log we can see the position of the objects

function coordinates(event) {
  var x = event.x - 152;
  var y = event.y - 80;
  console.log(`left : ${x}  top : ${y}`);
}



//Creation of the array with the Id's of the objects(images)
var image = [];
for (let i = 0; i < images.length; i++) {
  const element = images[i].id;
  console.log(element);
  image.push(element);
}

//Formated string
console.log("array of images", image);
const formatedString = image.toString().replace(/,/gi, " * ");
objectsToFind.innerHTML = formatedString;

//The click event that removes the object, add the points and removes
//the name of the object above the picture
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
    console.log("total ", total);
    const formatedString = image.toString().replace(/,/gi, " * ");
    objectsToFind.innerHTML = formatedString;

    var showMessage = document.querySelector(".popup");
    if (image.length == 0) {
      clearInterval(timer);
      showMessage.classList.toggle("visible");
      showMessage.innerHTML = "";
      showMessage.innerHTML = createNextLevelButton();
    }

    point.innerHTML = "";
    point.innerHTML = `Points : ${total}`;
  }
  return image
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

//Creates the popup window when the player lost
function createMessageLost() {
  var parMessageLost = document.createElement("p");
  parMessageLost.innerHTML = `<div class='div-message-lost'><button class="btn-message-lost" id="btn-start" onclick="window.location.reload();">TRY AGAIN</button>
    <button class="btn-message-lost" id="btn-home" onclick="location.href='./index.html'">HOME</button></div>`;
  return parMessageLost.innerHTML;
}
let randomPositionX = function (start, end) {
  let randomX = Math.floor((Math.random() * (end-start +1) + start))
  return randomX
}
let positionX =randomPositionX(200,400)

let randomPositionY = function (start, end) {
  let randomY = Math.floor((Math.random() * (end-start +1) + start))
  return randomY
}
let positionY=randomPositionY(200,400)


function imagesPosition(id, randomPositionX, randomPositionY) {
  randomPositionX = positionX
  randomPositionY = positionY
  id = 
  id.style.position = "absolute";
  id.style.left = positionX + "px";
  id.style.top = positionY + "px";

  console.log(randomPositionX + "px");
  console.log(randomPositionY + "px");
}



//Timer
var time = 30;
var showMessage = document.querySelector(".popup");

var timer = setInterval(countdown, 1000);
function countdown() {
  if (time > 0) {
    time--;
    
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

//The Eventlistener of every click at the objects
images.forEach((image) => {
  image.addEventListener("click", removeObject);
});

onclick = coordinates;
