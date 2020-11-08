var wall,thickness;
var bullet, speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200,200,50,10);
  wall = createSprite(1200,200,60,100);

 bullet.velocityX=5;
bullet.shapeColor=color("white");
 
 speed=random(55,90);
 thickness=random(22,83);
 weight=random(400,1500);
}


function draw() {
  background("black");  

  bullet.velocityX=speed;
  
if(wall.x-bullet.x < (bullet.width+wall.width)/2){

bullet.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180){
  bullet.shapeColor=color("red");
}
if(deformation<180 && deformation>100){
  bullet.shapeColor=color("yellow");
}
if(deformation<100){
  bullet.shapeColor=color("green");
}


}

  

  drawSprites();
}
