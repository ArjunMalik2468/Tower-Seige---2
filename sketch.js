const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15;
var box16;
var box17,box18,box19;
var box20,box21;
var box22;

var ground,ground2,ground3;

var slingshot;

var polygon;
var polygon_img;
function preload(){
  polygon_img=loadImage("Images/polygon.png");
}
function setup(){
    createCanvas(1000,500);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(100,450,2000,20);
    ground2 = new Ground(750,175,250,20);
    ground3 = new Ground(450,350,250,20);
    
    stroke(15);
    fill("black")
    box1 = new Box(390,327,25,35);
    box2 = new Box(410,327,25,35);
    box3 = new Box(430,327,25,35);
    box4 = new Box(450,327,25,35);
    box5 = new Box(470,327,25,35);
    box6 = new Box(490,327,25,35);
    box7 = new Box(510,327,25,35);

    stroke(15);
    fill("green")
    box8 = new Box(410,302,25,35);
    box9 = new Box(430,302,25,35);
    box10 = new Box(450,302,25,35);
    box11 = new Box(470,302,25,35);
    box12 = new Box(490,302,25,35);

    stroke(15);
    fill("voilet")
    box13 = new Box(430,277,25,35);
    box14 = new Box(450,277,25,35);
    box15 = new Box(470,277,25,35);

    stroke(15);
    fill("cyan")
    box16 = new Box(450,252,25,35);
    
    stroke(15);
    fill("blue")
    box17 = new Box(715,150,25,35);
    box18 = new Box(735,150,25,35);
    box19 = new Box(755,150,25,35);

    stroke(15);
    fill("pink")
    box20 = new Box(725,125,25,35);
    box21 = new Box(745,125,25,35);

    stroke(15);
    fill("red");
    box22 = new Box(735,100,25,35);

   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);
    slingshot = new Slingshot(polygon,{x:180,y:290});
    
}

function draw(){

    rectMode(CENTER);
    
    background("white");

    Engine.update(engine);

    strokeWeight(2);

    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("purple");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("red");
    box13.display();
    box14.display();
    box15.display();
   
    fill("cyan");
    box16.display();
    
    fill("orange");
    box17.display();
    box18.display();
    box19.display();
    
    fill("brown");
    box20.display();
    box21.display();

    fill("gold");
    box22.display();

    ground.display();
    ground2.display();
    ground3.display();
 
  
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();
   
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingshot.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
  }
  