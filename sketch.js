
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle = 60


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  button = createImg("up.png")
  button.position(20,30)
  button.size(50,50)
  button.mouseClicked(force)
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ground = new Ground(200,380,400,20)
  wall1 = new Ground(50,200,30,20)
  wall2 = new Ground(150,200,30,20)
  wall3 = new Ground(250,200,30,20)
  wall4 = new Ground(350,200,30,20)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display()
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  
  
  ellipse(ball.position.x,ball.position.y,20);

  
  
}

function force() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}