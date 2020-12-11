class Plinko
{
    constructor(x, y, radius)
    {
        var options = 
        {
            isStatic: true
            
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.width = radius + 10;
        this.height = radius+ 10;
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill(255);
        ellipse(pos.x, pos.y, this.width, this.height);
        pop();
    }
}