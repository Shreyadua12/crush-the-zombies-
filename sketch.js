const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

function preload (){
  zombie1= loadImage ("./assests/zombie1.png");
  zombie2= loadImage ("./assests/zombie2.png");
  zombie3= loadImage ("./assests/zombie3.png");
  zombie4= loadImage ("./assests/zombie4.png");

  background = loadImage ("./assests/background.png");

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

}

function draw() {
  background(51);
  Engine.update(engine);

  zombie = createSprite(width/2,height -110);
  zombie.addAnimation("lefttoright", zombie1,zombie2,zombie1);
  zombie.addAnimation("lefttoright", zombie3,zombie4,zombie3);
  zombie.scale=0.1;
  zombie.velocityX=10;

  breakButton =createButton("");
  breakButton.postion(width -200,height/2 - 50);
  breakButton.class("breakbutton");
  breakButton.mousePressed(handleButtonPress);

Matter.Composite.add(bridge.body,jointPoint);
jointLink = Link(bridge,jointPoint);

drawSprite ();
}

function handButtonPress() {
  jointLink.detach();
  setTimeout(()=> {
     bridge.break();
  },1500);
}