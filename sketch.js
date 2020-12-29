const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var crumpledPaper, ground;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	crumpledPaper = new Paper(20,50,5)
	ground = new Ground(100,50,10,20)

	//Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  crumpledPaper.display()
  ground.display()
 
}



