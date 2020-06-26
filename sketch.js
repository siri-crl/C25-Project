var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground1, box2, box3, box4;

function setup() {
    createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;

    paper1 = new CrumpledPaper(600,200);
    ground1 = new Ground(600,390,1200,PI/2);
    box2 = new Box(800,370,300,PI/2);
    box3 = new Box(940,285,150,0);
    box4 = new Box(659,285,150,0);
}
function draw(){
    background(0);
    Engine.update(engine);
    paper1.display();
    ground1.display();
    box2.display();
    box3.display();
    box4.display();
}