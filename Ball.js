class Ball {
    constructor(x,y,radius) {
        var options= {
            isStatic: false,
restitution: 0.3,
friction:0.5,
density:1.2
        }

        
        this.x=x;
        this.y=y;
      this.radius=radius;
      this.body= Bodies.circle(x,y,radius,options);
      World.add(world,this.body);
    }

    display()
 {
    var ballPos=this.body.position
    push();
    translate(ballPos.x,ballPos.y);
    ellipseMode(CENTER);
     ellipse(0,0,this.radius);
     pop();
 }
}
