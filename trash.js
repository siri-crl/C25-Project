class Box {
    constructor(x, y, height, angle) {
      var options = {
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      this.Image = loadImage = ("dustbingreen.png")
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("green");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  