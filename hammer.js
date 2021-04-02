class Hammer{
    constructor(x,y){
        var options={
            restitution:0.2,
            friction:1.0,
            density: 2
        }
       
        this.body = Bodies.rectangle(x , y,65,25,options)
        this.width = 65;
        this.height = 25;
       World.add(world,this.body)
    }
display(){
    var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      strokeWeight(4)
      stroke("green")
      rect(0, 0, this.width, this.height);
      pop();
}

}