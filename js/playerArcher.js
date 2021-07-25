class PlayerArcher
{
    constructor(x,y,width,height,angle)
    {
        this.x=x
        this.y=y
        this.height=height
        this.width=width
        this.angle=angle
        this.image=loadImage("assets/playerArcher.png")
    }
    display()
    {
        if(keyIsDown(RIGHT_ARROW) && this.angle<0.35)
        {
            this.angle+=0.02
        }

        if(keyIsDown(LEFT_ARROW) && this.angle>-1.45)
        {
            this.angle-=0.02
        }
        push ()
        translate (this.x,this.y)
        rotate (this.angle)
        rect(-20,-30,this.width,this.height)
        imageMode(CENTER)
        image(this.image,0,0,width,height)
        pop ()
    }
}