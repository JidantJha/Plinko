class Ball{
    constructor(x,y,radius){
        var options = {
            'restitiution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image=loadImage("polygon.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        //translate(this.position.x,this.position.y)
        fill(176,219,83);
        image(this.image,0,0,this.radius,this.radius);
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius);
    }
}