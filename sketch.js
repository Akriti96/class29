const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower;
var backgroundImage
var canon,angle

function preload(){
backgroundImage=loadImage("./assets/background.gif")
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  // create tower
  tower= new Tower(150,350,150,320)

  angle=-PI/4
  // create canon
  canon= new Canon(180,100,110,50,angle)


}

function draw() 
{
  background(51);
  Engine.update(engine);

  //displaying background Image
  // image(which image loadded, x,y,w,h)
  image(backgroundImage, 0,0 ,width,height)

  tower.show()
  canon.display()
 
}

