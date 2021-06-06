var bullet,wall,thinknes,damage; 
var speed,weight; 

function setup() {
 var canvas =  createCanvas(1600,400);


  speed=random(223,321);
  weight=random(30,52);
  thinknes=random(22,83);

 bullet =  createSprite(50,200,30,10);
 bullet.shapeColor = color(255,255,255);
 
 wall = createSprite(1200,200,thinknes,height/2);
 wall.shapeColor = color (80,80,80);
 damage =0.5 * weight * speed * speed/(thinknes * thinknes * thinknes);
}


function draw() {
  background(0,0,0);
  bullet.velocityX = speed;

  if(bullet.x >= wall .x){
    bullet.velocityX = 0;
    bullet.x = wall.x - 40;
    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage < 10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}
function hascolided(bullet,wall){
  bulletRightEdge * bullet.x * bullet.width;
  wallLeftEdge * wall.x >= wall.x;
  if(bulletRightEdge>=bulletLeftEdge);
  {
    return true
  }
  return false;
}