class Ground {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    var option = {
      isStatic: true,
    };
    this.body = Bodies.rectangle(
      this.x,
      this.y,
      this.width,
      this.height,
      option
    );
    World.add(world, this.body);
  }
  display() {
    rectMode(CENTER);
    var pos = this.body.position;
    rect(pos.x, pos.y, this.width, this.height);
  }
}
