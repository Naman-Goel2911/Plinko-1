class Particles
{
    constructor(x, y, radius)
    {
        var options = 
        {
            isStatic: false,
            density: 30,
            restitution: 0.4
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.width = radius;
        this.height = radius;
        this.colour = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        noStroke();
        fill(this.colour);
        ellipse(0, 0, this.width, this.height);
        pop();
        
    }
}