const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground;

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(700, 320, 70, 70);
  ground = new Ground(600, height, 1200, 20);
  box2 = new Box(920, 320, 70, 70);
  pig = new Pig(800, 350);
  log = new Log(810, 260, 300, PI / 2);
  bird = new Bird(280, 200);
}

function draw() {
  background(0);
  Engine.update(engine);
  box1.display();
  ground.display();
  box2.display();
  pig.display();
  log.display();
  bird.display();
}
