// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var person;
//var obstacle;

function setup() {
  createCanvas(640, 360);

	Person = new Person();
}


function draw() {
  background(51);
 Person.update();
	Person.display();
}
