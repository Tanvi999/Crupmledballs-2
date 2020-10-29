
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var paper;
var trashside1,trashside2,trashside3;
var ground;
var paperImage,trashImage;

function preload()
{
	paperImage = loadImage("paperimage.png");
	trashImage = loadImage("trashimage.png");
}

function setup() {
	createCanvas(600,525);

	engine = Engine.create();
	world = engine.world;

	var options = 
	{
		isStatic : false,
		restitution : 0.3,
		friction : 0.5,
		density : 1.2
	}

	paper = Bodies.circle(50,470,25,options);
	World.add(world,paper);

	trashside1 = Bodies.rectangle(400,450,10,70,{isStatic:true});
	World.add(world,trashside1);

	trashside2 = Bodies.rectangle(450,450,100,10,{isStatic:true});
	World.add(world,trashside2);

	trashside3 = Bodies.rectangle(500,450,10,70,{isStatic:true});
	World.add(world,trashside3);

	ground = Bodies.rectangle(300,500,600,15,{isStatic:true});
	World.add(world,ground);
	//ground = createSprite(300,500,600,15);
    //ground.shapeColor = color("brown");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  imageMode(CENTER);
  image(paperImage,paper.position.x,paper.position.y,25,25);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,15);

  rectMode(CENTER);
  rect(trashside1.position.x,trashside1.position.y,10,70)

  rectMode(CENTER);
  rect(trashside3.position.x,trashside3.position.y,10,70)

  imageMode(CENTER);
  image(trashImage,trashside2.position.x,trashside2.position.y,140,80)
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper,paper.position,{x:70, y:-85})
	}
}

