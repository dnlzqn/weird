t=1e2,draw=()=>{for(createCanvas(w=windowWidth,h=windowHeight),strokeWeight(.0128),stroke(w),background(0),translate(w/2,h/2),scale(s=50),n=map(mouseX,0,w,-5,5),a=0;2.5>a;a+=4e-4)x=a*t+n,y=2*(sin(x)/tan(t/a))-n,e=3*(noise(cos(x*a))*cos(x)/sin(a)),e2=noise(atan(x))*w/20,circle(sin(e2-y+n)*e,atan(x-n)*e-y,.0041);t+=map(mouseX,0,w,-.035,+.035)}


/*let zoff=1000000;
let mX, mY

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  mX = windowWidth / 2;
  mY = windowHeight / 2;
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  let mm = map(mX, 0, width, -5, 5);
  let my = map(mY, 0, height, 10, -10);
  
  scale(40);

  for (let a = 0; a < 2.5; a += 0.0004) {
    stroke(255)
    strokeWeight(0.0128)

    //let x = cos(a) * sin(a);
    
    //let x = tan(a)+a;
        
    let x = a*100+mm;

    //let y = (a)/tan(x+zoff)+my;
    
    let y = sin(x) / tan(zoff/a)*2-mm;

    //let e = noise(cos(x*a)) * cos(x) / noise(sin(x))*map(mX, 0, width, 2, 4);
    
    let e = noise(cos(x*a)) * cos(x) / (sin(a))*3;
    let e2 = noise(atan(x))*width/20;

    
    //let e = cos(x) * cos(y) + sin(a);
    
    //let e = (cos(x))*2.3;
    
    //let f = noise(tan(e))*2

    
    //let e = noise(cos(x*a)) * cos(y) / noise(sin(a));


    //cuadrado con vertices redondeados
    //point(sin(tan(cos(y))+mm)*e, sin(tan(sin(y))+mm)*e);
    
    //point(sin(sin(cos(y))+mm)*e, sin(sin(sin(y))+mm)*e);


   //circle(cos(tan(sin(y+my)))/e, (((y-mm)))*a, 0.0031);


//    circle(sin(e-y+mm-my)*e, atan(e-my+mm)*e-y,0.0031); 
    
    circle(sin(e2-y+mm-my)*e, atan(x-my+mm)*e-y,0.0031);    

  }
  //zoff += 0.035;
  
  zoff += map(mouseX,0,width,-0.035,+0.035);

}

function mousePressed() {
  mX = mouseX;
  mY = mouseY;
}

function mouseMoved() {
  mX = mouseX;
  mY = mouseY;
}

function touchStarted() {
  mX = mouseX;
  mY = mouseY;
}
*/

function touchMoved() {
  mX = mouseX;
  mY = mouseY;
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
