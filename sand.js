class Sand {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.3,
          'friction':5,
          'density':1,
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.radius = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      fill("white");
     ellipseMode(RADIUS);
      fill("blue");
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };
