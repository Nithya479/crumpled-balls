const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rect1,rect2,rect3;

var ball;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1= createSprite(1200,660,100,10);
	rect1.shapeColor= "red";
	rect2=createSprite(1150,620,10,90);
	rect2.shapeColor= "red";
	rect3=createSprite(1250,620,10,90);
	rect3.shapeColor= "red";

	ground=new Ground(width/2,670,width,20);
ball=new Ball(200,650,40);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ground.display();
  drawSprites();

 
 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}


