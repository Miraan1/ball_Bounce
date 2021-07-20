class Tower{
    constructor(x,y,w,h){
        var option = {
            isStatic:true

        }
        this.w = w
        this.h = h


        this.body = Bodies.rectangle(x,y,w,h,option);
        World.add(world,this.body)
        this.image = loadImage("assets/tower.png")
    }


    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        imageMode(CENTER)
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        image(this.image,0,0,this.w,this.h)
        pop();
    }
}