class Stone{
    constructor(x,y,r){
        var option={
            isStatic:false,
            restitution:0,
            density:1.2,
            friction:1.0

            
        }
        this.body=Bodies.circle(x,y,r,option);
      //  this.width=width;
       // this.height=height;
        this.r=r;
        this.image=loadImage("stone.png");
        
        World.add(world,this.body);
    }
      display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
       imageMode(CENTER);
        fill("black");
        ellipseMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}