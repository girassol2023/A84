canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
roverWidth = 100;
roverHeight = 90;
roverX = 10;
roverY = 10;
NasaArray = ["nasa_image_1.jpg ", "nasa_image_2.jpeg", "nasa_image_4.jpg"]
var random = Math.floor(Math.random()*4)
backgroundImage = NasaArray[random]
roverImage = "rover.png"
function add() {
    backgroundImageTag = new Image()
    backgroundImageTag.onload = uploadbackground
    backgroundImageTag.src = backgroundImage
    roverImageTag = new Image()
    roverImageTag.onload = uploadrover
    roverImageTag.src = roverImage
}
function uploadbackground() {
    ctx.drawImage(backgroundImageTag, 0, 0, canvas.width, canvas.height)
}
function uploadrover() {
    ctx.drawImage(roverImageTag, roverX, roverY, roverWidth, roverHeight)
}
window.addEventListener("keydown", myKeyDown)
function myKeyDown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)
    if (keyPressed == "38") {
        up()
        console.log("cima")
    }

    if (keyPressed == "40") {
        down()
        console.log("baixo")
    } 
    if (keyPressed == "37") {
        left()
        console.log("esquerda")
    }
    
    if (keyPressed == "39") {
        right()
        console.log("direita")
    }
}
function up() {
    if (roverY>=0) {
        roverY = roverY -10
    uploadbackground()
    uploadrover()
    }
} 
function down() {
    if (roverY<=500) {
        roverY = roverY +10
    uploadbackground()
    uploadrover()
    }
}
function left() {
    if (roverX>=0) {
        roverX = roverX -10
    uploadbackground()
    uploadrover()
    }
}
function right() {
    if (roverX<=700) {
        roverX = roverX +10
    uploadbackground()
    uploadrover()
    }
}

