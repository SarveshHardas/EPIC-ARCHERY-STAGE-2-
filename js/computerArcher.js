class ComputerArcher
{
    constructor(x,y,width,height,angle)
    {
        this.x=x
        this.y=y
        this.height=height
        this.width=width
        this.angle=angle
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("assets/computerArcher.png")
        World.add(world,this.body)
    }
    display()
    {
        var pos=this.body.position
        var angle=this.body.position
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,150,150)
    }
}