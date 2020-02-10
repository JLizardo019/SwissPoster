let size =0;
let size2 = 0;
let size3=0;
let percent=0;
let cnv;

let design = 1;

function setup() {

    // responsive design
    if (window.matchMedia("only screen and (min-width: 961px)").matches) {
        percent = 0.40;
      } 
    else if (window.matchMedia("only screen and (min-width: 481px) and (max-width: 960px)").matches)
    {
        percent = 0.55;
    }
    else if (window.matchMedia("only screen and (max-width: 480px)").matches)
    {
        percent = 0.80;
    }


  size = windowWidth*percent/3.84;
  size2 = windowWidth*percent/1.42;
  size3= windowWidth*percent/2;
  cnv =createCanvas(windowWidth*percent, windowWidth*percent);
  noStroke();
}

function draw() {
  //console.log(design);
  if (design%2 ==0)
  {
    design2();
  }
  
  else if (design%3==0)
  {
    design3();
  }
  else
  {
    design1();
  }
  
}

function design1(){
  background("#dbe2d4");
  
  // main design
  
  fill("#009fcb");
  rect(0,0,width, size); // top horizontal rectangle
  
  fill("#cd0178");
  rect(0,0,size, width); // left vertical rectangle
  
  fill("#2c2a7d");
  square(0,0,size); // top left square
  
  fill("#c5191e");
  triangle(size,height-size, 0,height, size, height); // bottom left rectangle
  rect(size,height-size,width, size); // bottom horizontal rectangle
  
  fill("#018242");
  triangle(width-size,size, width,0, width,size);
  rect(width-size,size,size, width); // right vertical rectangle
  
  fill("#2e2b2e");
  square(width-size,height-size,size); // bottom right square
  
  fill("#d4b311");
  triangle(size,height-size, width-size,height-size, width-size, size); // middle triangle
  
  
}

function design2(){
  background("#dbe2d4");
  
  // design 2
  fill("#c5191e");
  rect(0,0,size2, height); // left vertical rectangle
  
  fill("#d4b311");
  rect(0,0,size2, size2*0.80); // top yellow square
  
  fill("#009fcb");
  rect(size2*0.90,size2*percent,size2 - (size2*percent), size2); // outer right vertical rectangle
  
  fill("#018242");
  rect(size2*percent,size2*percent,size2 - (size2*percent), size2*0.70); // inner right top square
  
  fill("#2e2b2e");
  rect(size2*percent,size2*0.80,size2 - (size2*percent), size2*0.70); // inner right bottom square
  
}

function design3()
{
  background("#dbe2d4");
  
  // design 3
  fill("#d4b311");
  triangle(width/2,0,0,width/4, width/2,width/2);// top left triangle
  
  fill("#2e2b2e");
  triangle(width-(width/4),width/2,width/2, height,width,height); // bottom right triangle
  
  
  fill("#cd0178");
  square(0,width/2,size3); // left bottom rectangle
  
  
  fill("#009fcb");
  circle(width-(width/4),width/4, size3 ); // top right circle 
  
}

function mousePressed()
{
  if (design<3)
  {design +=1;}
  else
  {
    design=1;
  }
}

function windowResized() {
    // responsive design
    if (window.matchMedia("only screen and (min-width: 961px)").matches) {
        percent = 0.40;
      } 
    else if (window.matchMedia("only screen and (min-width: 481px) and (max-width: 960px)").matches)
    {
        percent = 0.55;
    }
    else if (window.matchMedia("only screen and (max-width: 480px)").matches)
    {
        percent = 0.80;
    }
    size = windowWidth*percent/3.84;
    size2 = windowWidth*percent/1.42;
    size3= windowWidth*percent/2;
    resizeCanvas(windowWidth*percent, windowWidth*percent);
  }