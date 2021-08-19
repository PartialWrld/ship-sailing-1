var ship, ship_sailing, edges;
var seaImage
var sea

function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,600);
//
sea = createSprite(40,170,600,50);
sea.addAnimation("sea",seaImage);
  ship = createSprite(50,160,20,50);
ship.addAnimation("sailing", ship_sailing);
edges = createEdgeSprites();
//
ship.scale = 0.2;
sea.scale=0.3




}

function draw() {
  background("white");
//
  ship.velocityX = ship.velocityX + 0.2;
//

//


drawSprites()
}