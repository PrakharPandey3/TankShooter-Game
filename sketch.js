// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
createCanvas(800,500);
engine = Engine.create();
    world = engine.world;
    ground= new Ground(200,490,1200,20);
    tanker = new Tanker(50,400,100,100);
}

function draw() {
// Remember to update the Matter Engine and set the background.
background("green");
Engine.update(engine);

ground.display();
tanker.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}