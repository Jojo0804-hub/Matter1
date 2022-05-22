const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ball
let engine;
let world;
var g1,g2,g3,g4
var button1,button2

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  g1=new Ground(200,380,400,20)
  
  g2=new Ground(380,200,20,400)
  g3=new Ground(200,20,400,20)
  g4=new Ground(20,200,20,400)
  
  button1=createImg("push.png")
  button1.position(100,100)
  button1.size(50,50)
  button1.mouseClicked(hForce)
  button2=createImg("push.png")
  button2.position(150,80)
  button2.size(50,50)
  button2.mouseClicked(vForce)
  var options={
    restitution:0.5
  }
  ball=Bodies.circle(200,200,30,options)
  World.add(world,ball)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  g1.display()
  g2.display()
  g3.display()
  g4.display()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
}
function vForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.01})
}
function hForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.01,y:0})
}