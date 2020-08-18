
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var Box1,Box2,Box3;
var Ground1;
var ball1;
var Ball1;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.
	Box1 = new Box(900,620,220,20);
	Box2 = new Box(815,620,20,100);
	Box3 = new Box(985,620,20,100);
	Ground1 = new Ground(600,690,1200,20);

	Ball1 = new Ball(100,180,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
	Box1.display();
	Box2.display();
	Box3.display();
	Ground1.display();
	Ball1.display();


} 


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Ball1.body,Ball1.body.position,{x:85,y:-85});
	

	}
}



