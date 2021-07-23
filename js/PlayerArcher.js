class PlayerArcher
{
    constructor(x,y,width,height)
    {
        this.x=x
        this.y=y
        this.height=height
        this.width=width
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("assets/playerArcher.png")
        World.add(world,this.body)
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

        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
    }
}