var sleep, gym, eat, drink, move
var astronaut
var bckgrnd, bg
var sleeping, bathing, gymming, eating, moving


function preload(){
bckgrnd = loadImage("iss.png")
sleep = loadImage("sleep.png")
bath = loadAnimation("bath1", "bath2", "brush.png")
gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png")
eat = loadAnimation("eat1.png", "eat2.png")
move = loadAnimation("move.png", "move1.png")
}


function setup() {
  createCanvas(400, 400);

  astronaut = createSprite(200, 230)
  astronaut.addAnimation("sleep", sleep)
  astronaut.scale= 0.1

  bg = createSprite(200,200)
  bg.addImage("bckgrnd", bckgrnd)
}

function draw() {
  background(220);
}