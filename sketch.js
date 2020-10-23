var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 100, 50, 50);
  movingRect=createSprite(200, 800, 80, 30);

  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

  //fixedRect.debug=true;
 // movingRect.debug=true;
 // fixedRect.velocityY=5;
  //movingRect.velocityY=-5;
}

function draw() {
  background(255,255,255);  

  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if (isTouching(movingRect, fixedRect)){
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";

  }
  else {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }
  bounceOff(movingRect, fixedRect);
  drawSprites();
  
}
