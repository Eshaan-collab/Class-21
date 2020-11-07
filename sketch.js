var fixedRect, movingRect;
var fixedRect1;
var fixedRect2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect1=createSprite(500,400,50,70);
  fixedRect1.shapeColor="green";
  fixedRect2=createSprite(400,400,50,80);
  fixedRect2.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //console.log(fixedRect.x)
  //console.log(movingRect.x)
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  } 
  if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor="red";
    fixedRect1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect1.shapeColor="blue";
  } 
  if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor="red";
    fixedRect2.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect2.shapeColor="blue";
  } 
  drawSprites();
}
