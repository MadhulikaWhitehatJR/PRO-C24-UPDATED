class Circle{
    constructor(x, y,radius) {
      var options = {
          'restitution':0.4,
          'friction':0.3,
          'density':12,
      }
      this.body = Bodies.circle(x,y,3,options);
      this.radius = 3;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("black");
      fill("teal");
      ellipse(0,0,3,3);
      pop();
    }
  };