const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var log6,chain;
var ground;
var bob;
var stand;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

     
    ground = new Ground(600,100,1200,20);
     
   
    bob = new Bob(600,300,60);
    

    chain = new Slingshot(bob.body,ground.body);

    
   
}

function draw(){
    background("blue");
    Engine.update(engine);
   // log6.display();
    bob.display();
    chain.display();
     
   
    if(keyCode===32){
        start();
      }
      
    if(keyCode===8){
        end();
    }
    fill("white");
    textSize(20);
    text("Press space to move the bob with the mouse",700,300);
    text("press enter to stop the pendulum moving",100,300);
}
fill("red")

function start(){
    bob.body.position.x  = mouseX;
    bob.body.position.y  = mouseY;
 
 }

 function end(){
    bob.body.position.x  = 600;
    bob.body.position.y  = 300; 
 }