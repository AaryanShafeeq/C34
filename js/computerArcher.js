class computerArcher {
    constructor(x, y, width, height) {
      var options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/computerArcher.png");
  
      World.add(world, this.body);

      Matter.Body.setAngle(this.body, PI/2);
    }
  
    display() {
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  