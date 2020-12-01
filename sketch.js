var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

 wall= createSprite(1200, 200, thickness, height/2);
 wall.shapecolor=color(80,80,80);

 bullet= createSprite(50, 200, 50, 50);
 bullet.velocityX=speed;
}

function draw() {
  background(255);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 *weight *speed *speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapecolor=color(255,0,0);
    }
    if(damage<10){
      wall.shapecolor=color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(Lbullet,Lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}