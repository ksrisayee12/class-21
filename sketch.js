var fixedRect, movingRect;
var ob1, ob2, ob3, ob4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1 = createSprite(100,500,50,50)
  ob1.shapeColor = "blue"
  ob2 = createSprite(500,300,50,50)
  ob2.shapeColor = "blue"
  ob3 = createSprite(250,600,50,50)
  ob3.shapeColor = "blue"
  ob4 = createSprite(400,200,50,50)
  ob4.shapeColor = "blue"

  movingRect.velocityY = 5;
ob1.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect, ob2)){
  movingRect.shapeColor = "red";
  ob2.shapeColor = "red";
 }
 else {
  movingRect.shapeColor = "green";
  ob2.shapeColor = "green";
 }
 bounceOff(movingRect,ob1);
  drawSprites();
}

