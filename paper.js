class Paper
{
	constructor(x,y,radius){
	var options ={
		isStatic: true,
	      resttution:0,	
			friction:1,
			density:0.1	

	}
    this.image=loadImage("paper.png")
    this.body = Bodies.circle(x,y,radius,options);
    this.radius=radius

    World.add(world, this.body);
}
display(){
    ellipseMode(RADIUS);
    fill("yellow");

    circle(this.body.position.x, this.body.position.y, this.radius);   
}	
}