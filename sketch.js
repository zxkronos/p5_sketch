var parts =[];

function setup() {
  createCanvas (400,300);
  particle = new Particle (100,100);
  p2 = new Particle (200,100);
  
}

function mousePressed (){
  parts.push (new Particle (mouseX,mouseY));
}

function draw() {
  background (230);
  particle.update ();
  particle.show ();
  p2.epilepti ();
  p2.show2 ();
  
  for (var i =0; i<parts.length ; i++){
    parts[i].update();
    parts[i].show();
    
  }
}

