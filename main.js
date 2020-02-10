// // let size =130;
// // function setup() {
// //   createCanvas(500, 500);
// //   noStroke();
// // }

// // 500 square and 3.84 size
let size =0;
let cnv;
function setup() {
  size = windowWidth*0.60/3.84;
  cnv =createCanvas(windowWidth*0.60, windowWidth*0.60);
  //cnv.position((windowWidth*.60)/, 0);
  noStroke();
}

function draw() {
  background("#dbe2d4");
  
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

function windowResized() {
    size = windowWidth*.60/3.84;
    resizeCanvas(windowWidth*0.60, windowWidth*0.60);
  }