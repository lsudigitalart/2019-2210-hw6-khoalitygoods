var dancingAstro
var spaceEarth
var stars = []

function preload (){
  dancingAstro = createImg("ASTRO-MAN.gif")
  spaceEarth = createImg("Planet-Earth.jpg")

}

class Star{
  constructor(){
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);
  }

  update(){
    this.z = this.z - 1 
    if (this.z < 10 ){
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
    }
  }

  show (){
    fill(255);
    noStroke();
    
    var sx = map (this.x/this.z, 0, 1, 0, width);
    var sy = map (this.y/this.z, 0, 1, 0, height);
    var r = map (this.z, 0, width, 16, 0);
    ellipse( sx, sy, r, r);
  }
}

function setup() {
  createCanvas (800,600);

  for(var n = 800; n > 0; n--){
    stars.push(new Star())
  }

  translate(width/2, height/2)
  


  spaceEarth.position (0,0);
  spaceEarth.size (800,600);
  spaceEarth.style("z-index","-1")
  spaceEarth.style("opacity","0.5")


  dancingAstro.position(0,0);
  dancingAstro.size(800, 600);
  dancingAstro.style("z-index","-2");

}







function draw() {

    // background (0, 0, 0)

  
  for (var i =0; i<stars.length; i++ ){
    print("here");

    stars[i].update ();
    stars[i].show ();
  }

  
}
