var car, wall;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,150,40,height/2)
  car.velocityX = speed;
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  if(wall.x - car.x < car.width/2 + wall.width/2){
    car.velocityX = 0;
    var deformation = 0.5* weight* speed* speed/22500;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }   
    if(deformation<180 && deformation>100){
      car.shapeColor= color(230,230,0);
    }     
    if(deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }
  fill("black");
  stroke("black")
  textSize(20);
  text("Speed: "+speed,50,20);
  text("Weight: "+ weight,50,75);
  text(`Deformation: ${deformation}`,50,130);
  drawSprites();
}