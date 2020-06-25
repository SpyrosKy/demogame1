
let image = ["test1", "test2"]



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

  
function imagesPosition(randomPositionX, randomPositionY) {
    randomPositionX = positionX
    randomPositionY = positionY
   

    console.log(randomPositionX + "px");
    console.log(randomPositionY + "px");
}

let time = 5
let timer = setInterval(countdown, 1000);
function countdown() {
    if (time > 0) {
        time--;
        
    } else if (time === 0) {
        clearInterval(timer);
    }
    
}
countdown()


