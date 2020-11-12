//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ball;
var ground;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var ground_options ={
    isStatic : true
  }
 
  var ball_options = {
    restitution : 2
  }

   ball=Bodies.circle(200,100,20,ball_options);

   World.add(myWorld,ball);
  ground = Bodies.rectangle(200,390,400,10,ground_options);
  World.add(myWorld,ground); 
  console.log(ground);

}

function draw() {
  background(200,200,255);  

  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}