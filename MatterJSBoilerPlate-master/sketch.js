
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, crumpledBall;
var wall1, wall2, bottom;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 600, 800, 100);
	crumpledBall = new Ball(100, 400, 20);

	wall1 = new Wall(600, 465, 25, 175);
	wall2 = new Wall(700, 465, 25, 175);
	bottom = new Box(650, 460, 150, 200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  crumpledBall.display();

  wall1.display();
  wall2.display();
  bottom.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledBall.body, crumpledBall.body.position, {x:5, y: -3});
	}
}



