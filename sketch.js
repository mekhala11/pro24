
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	hammer = new Hammer(100,100);

	ground = new Ground (100,650,2000,20);

	rubber = new Rubber(200,300);

	iron = new Iron (400,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  hammer.display();
  ground.display();
  rubber.display();
  iron.display();
  drawSprites();
 
}



