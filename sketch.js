const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var rightwall;
var leftwall;
var stone;
var jointlink;
var bridge;
var ground;
var axe_Img,b_kg,stone,wood,zomImg;
var zom;
var axe;

var stones = [];

function preload(){

  b_kg = loadImage("assets/background.png");
  stone = loadImage('assets/stone.png');
  wood = loadImage('assets/wood.png');
  zomImg = loadImage('assets/zombie.png');

}

function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  axe = createImg("assets/axe.png");
  axe.position(930,380);
  axe.size(70,70);
  axe.mouseClicked(drop);
  
  fill("#a57164");
  
  rightwall = new Base(5,400,4,2);

  leftwall = new Base(995,400,4,2);

  stone = new Stone(500,-10);

  jointpoint = new Base(200,400,10,30);

  jointpoint2 = new Base(900,350,1,3);


  bridge = new Bridge(20,{x:10,y:350});

  zom = createSprite(10,750);
  zom.addImage("zom",zomImg);
  zom.scale = 1;
  
  
  //jointlink = new Link(rightwall.body,leftwall.body);

  for(var i = 0; i <=12;i++){
    var x = random(200,600);
    var y = random(-10,140);
    var stone = new Stone(x,y,40,40);      
    stones.push(stone);
    //stones[i].display();

    var op = {
      isStatic : true,
    }
    ground = Bodies.rectangle(0,780,1000,20,op);

  }

  Composite.add(bridge,leftwall);
  jointlink = new Link(bridge,jointpoint2);

  

}
function draw() {
  imageMode(CENTER);
  background("#353839");
  image(b_kg,width/2,height/2,1000,800);
  Engine.update(engine);
  
  zom.velocityX = 4;

 if(zom.x === 1000){
    zom.velocityX = -4;
 }

 
 

  //rightwall.display();
  //leftwall.display();
  bridge.show();

  

  image(zomImg,zom.position.x,zom.position.y,50,100);

    
    for(var i = 0; i <=12;i++){
      stones[i].display();
    }

 
  
  
}

function drop(){
  jointlink.break();
  setTimeout(() =>{
  bridge.break()
  },1500)
  
}
