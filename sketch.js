var bird;
var objects;
var gameState="play";

var birdImg;

var WallGroup

function preload(){
var count = 0;

  birdImg=loadImage("hgy.png");


}

function setup() {
  createCanvas(800,550);

bird=createSprite(200,80,10,10);
bird.addImage(  birdImg);

bird.scale=0.2

WallGroup=createGroup();


}

function draw() {
  background("LightBlue");  
 
  if (keyDown("space")){

  bird.velocityY=-6

  }

  bird.velocityY=bird.velocityY+0.8;

  var color=random(70,150);

  if (bird.isTouching(WallGroup)){
   
    bird.velocityX=0;
    WallGroup.velocityY=0;

  }

  if (count=500){

    bird.velocityX=0;
    WallGroup.velocityY=0;


    textSize=2;
    Text("You Win "(200,200))




  }

  Text("Score:"+count,250,100);
  
  Walls();

  drawSprites();
  }

function Walls (){

  if(World.frameCount % 50 === 0) {
    var Object = createSprite(600,random(50,110),40,250);
    Object.velocityX = -7;
    
    Object.lifetime = 170;
    Object.shapeColor=rgb(random(70,150),random(70,150),random(40,150))

    WallGroup.add(Object);

    var Object1 = createSprite(600,random(450,530),40,250);
    Object1.velocityX = -7;
    
    Object1.lifetime = 170;
    Object1.shapeColor=rgb(random(70,150),random(70,150),random(70,150))
WallGroup.add(Object1);
  }







}

