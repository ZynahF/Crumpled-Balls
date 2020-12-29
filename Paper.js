class Paper {

constructer(x, y, r){
    
var options={

isStatic:false,
restitution:0.3,
friction:1.2

}
  
this.x=x;
this.y=y;
this.r=r/2;
this.body = Bodies.circle(this.x, this.y, this.r, options)
World.add(world, this.body)


}

display() {

    var Paperpos=this.body.position;

    push()
    translate(Paperpos.x, Paperpos.y)
    ellipseMode(RADIUS)
    strokeWeight(3);
    fill(255,0,255)
    ellipse(0,0,this.r, this.r);
    pop();

}

}