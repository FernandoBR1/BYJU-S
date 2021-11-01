
var nombre;
function setup() {
  createCanvas(400,400);
  nombre = createSprite(200,200,20,20);}



function draw() 
{
  background("red");



if(keyIsDown(RIGHT_ARROW)){
nombre.position.x = nombre.position.x+10;
}

if(keyIsDown(LEFT_ARROW)){
  nombre.position.x = nombre.position.x-10;
  }

if(keyIsDown(UP_ARROW)){
nombre.position.y = nombre.position.y-10;
    }


if(keyIsDown(DOWN_ARROW)){
nombre.position.y = nombre.position.y+10;
      }

drawSprites();
}




