class Slingshot{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB: bodyB,
            length: 200,
            stiffness: 0.05
        }
    
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        strokeWeight(4);
        
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);

      /*   if(keycode===32)  {
            start();
          } 
       */    
    }
}

/* unction start(){
    this.body.position.x = mouseX;
      this.body.position.y = mouseY;
    
  }
  */ 