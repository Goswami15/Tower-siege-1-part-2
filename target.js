class target{
    constructor(x,y,width,height){
        var options={
            restitution:0,
            friction:1,
        }
        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        
        
        
            }
            display(){
                push();
                rectMode(CENTER);
                fill(random(0,255),random(0,255),random(0,255));
                rect(this.body.position.x,this.body.position.y,this.width,this.height);
                pop();
            }
    }
