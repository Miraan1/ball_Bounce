const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower;
var ball;

function setup(){
    var canvas = createCanvas(800,1200);
    engine = Engine.create();
    world = engine.world;
    tower = new Tower(150,350,160,300)
    ball_options = {
        restitution:0.3,
        friction:0,
        density:1.2
    }
    groundj = new Ground(0,600,width,20);
    leftSide = new Ground(500,480,20,120);
    rightSide = new Ground(700,480,20,120);
    ball = Bodies.circle(200,585,30,ball_options)

 
    
}

function draw(){
    background(0);
    Engine.update(engine);
    //tower.display()
    groundj.display()
    leftSide.display()
    rightSide.display()
    ellipse(ball.position.x,ball.position.y,30);
   
}

function keyPressed() {
    
    if(keyCode === UP_ARROW){
        Matter.body.applyForce(ball,{x:0,y:0},{x:0,y:0.08})
  }
}
