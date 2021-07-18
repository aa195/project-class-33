class Snow{
    constructor(x,y,width,height){
        var options = {
            'restitution':1.0,
            'density': 1.0,
            'friction':1.0
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height= height;
        this.image = loadImage("snow4.webp");
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        fill ("black")
        translate (pos.x,pos.y);
        angleMode (RADIANS);
        rotate (angle);
        imageMode (CENTER);
        image(this.image,0,0,this.width,this.height);
        pop ();
    }
}