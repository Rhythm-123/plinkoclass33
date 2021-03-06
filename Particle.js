class Particle{
constructor(x,y,r){
    var option={
        restitution:0.4

    }
    this.r=r
    this.body=Bodies.circle(x,y,r,option)
    this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world,this.body)
}

display(){
    push()
    translate (this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill(this.color)
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop()
    
}




}

