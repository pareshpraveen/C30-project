class Stone{
    constructor(x,y){
        var op = {
            
        }
        this.body = Bodies.circle(x,y,20,op);
        World.add(world,this.body);


    }

    display(){

        fill("white");
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        image(stone,0,0,40,40);
        pop();
    }

}