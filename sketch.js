var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(400, 100, 50, 80);
  movingRect= createSprite(400, 300, 80, 30);
  fixedRect.velocityY=+5;
  movingRect.velocityY=-5;
}

function draw() {
  background(255,255,255);  
  

if( movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.velocityY=movingRect.velocityY*(-1)
    fixedRect.velocityY=fixedRect.velocityY*(-1)
  }

  drawSprites();
}
