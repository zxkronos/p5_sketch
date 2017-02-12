var gravity = 0.1;
var cont =0;

function Particle (x, y){
  this.x =x;
  this.y = y;
  this.tam =24;
  this.col= color (0,150);
  
  this.yspeed =0;
  
  this.history =[];
  
  this.update = function (){
    this.y += this.yspeed ;
    this.yspeed += gravity;
    
    if (this.y > height){
      this.y= height;
      this.yspeed *= -0.9;
      this.col =color(random (255),random (255),random (255));
    }
    var v = createVector (this.x, this.y);
    this.history.push (v);
    //print (this.history.length);
  }
  
    this.epilepti = function (){
    this.x = this.x + random (-5,5) ;
    this.y = this.y + random (-5,5)  ;
    
    
   
    var v = createVector (this.x, this.y);
    this.history.push (v);
    if (cont == 25){
      this.col =color(random (255),random (255),random (255));
      
      cont =0;
    }
    cont++;
    if (this.history.length > 25){
      this.history.splice (0,1);
    }
  // print (this.history.length);
  }
  
  this.show = function (){
    stroke (0);
    fill (this.col);
    ellipse (this.x,this.y, this.tam,this.tam);
    
    for (var i = 0; i< this.history.length; i++){
      var pos = this.history [i];
      ellipse (pos.x, pos.y, this.tam/2, this.tam/2);
     // ellipse (pos.x, pos.y, i, i);
    }
    
    if (this.history.length > 15){
      this.history.splice (0,1);
    }
  }
  
  this.show2 = function() {
    stroke(0);
    fill(this.col);
    ellipse(this.x, this.y, 24, 24);
    
    noFill();
    beginShape();
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      //fill(random(255));
      //ellipse(pos.x, pos.y, i, i);
      vertex(pos.x, pos.y);
    }
    endShape();
    
    
}
  
}