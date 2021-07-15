const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

function preload(){
  zombieImg = loadImage("./assets/zombie.png");
  axeImg=loadImage("./assets/axe.png");
  woodImg=loadImage("./assets/wood.png");
  stoneImg=loadImage("./assets/stone.png");

  background = loadImage("./assets/background.png");
    
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  zombie=createSprite(widht/2,height - 110)
  zombie.addImage(zombieImg)
  zombie.scale=0.1;
  zombie.velocityX=10

 breakButton = createbutton("");
 breakButton.position(width - 200,height/2 - 50)
 breakButton.class("breakButton")
 breakButton.mousePressed(handleButtonPress);
  
}

function draw() {
  background(51);
  Engine.update(engine);
drawSprites()
}

function handleButtonPress(){
  jointLink.detach();
    setTimeout(() =>{
    bridge.break();
  },1500);

}