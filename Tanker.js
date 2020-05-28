class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true,
      
     }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
   
    World.add(world, this.body);
    };

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      rectMode(CENTER);
      fill("brown");
      circle(150,430,80);
     rect(150,470,100,20);
     rect(150,450,100,20);
     angleMode(RADIANTS);
     // arc(50,300,50,PI,0);
     
     
     
      pop();
    };
}
