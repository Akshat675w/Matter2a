var rubber;
var stone;
var hammer;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
    engine = Engine.create();
	world = engine.world;
  hammer1:Option.isStatic;
      

	rubber1 = new Rubber(400,790,10);
	stone1 = new Stone(200,390,100,80);
	ground = new Ground(600,height,1200,20);
  hammer1 = new Hammer(400,400);
  
  
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rubber1.display();
  stone1.display();
  ground.display();
  hammer1.display()
  drawSprites();
 
}



