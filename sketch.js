const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer,plane;
var box1,circle;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(200,200,100,20);

	box1 = new Box(1000,500,60,60);
	box2 = new Box (400,550, 60,30);

	circle1 = new Circle(600,550,10);
	circle2 = new Circle(602,550,10);
	circle3 = new Circle(604,550,10);
	circle4 = new Circle(606,550,10);
	circle5 = new Circle(608,550,10);
	circle6 = new Circle(610,550,10);
	circle7 = new Circle(612,550,10);
	circle8 = new Circle(614,550,10);
	circle9 = new Circle(616,550,10);
	circle10 = new Circle(618,550,10);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    box1.display();
    box2.display();
    circle1.display();
    circle2.display();
    circle3.display();
    circle4.display();
    circle5.display();
    circle6.display();
    circle7.display();
    circle8.display();
    circle9.display();
    circle10.display();
 
}