var sound1
function preload(){
  sound1 = loadSound("mixkit-cat-walk-371.mp3") //先把音樂檔載入到sound1程式碼中
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#70d6ff")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}
var w = 100 
var h = 100
var fc,fc1
function draw() {
  background("#70d6ff");
  rectMode(CENTER)  //設定方框中心點為方框座標點
  noFill()
  textSize(50)
  text("412730706羅小璇",width-500,height-50)
  if(sound1.isPlaying())
  {  //音樂有撥放
  fc = map(analyzer.getLevel(),0,1,0,100)
  fc1 = map(analyzer.getLevel(),0,1,0,100)
}
else{  //音樂沒撥放
fc = map(mouseX,0,width,0,100)
fc1 = map(mouseY,0,width,0,100)
}
  for(var y=50;y<=height+50;y=y+h){
  for(var x=50;x<=width+50;x=x+w){
  stroke("#f72585")
  strokeWeight(2)
  ellipse(x,y,w+fc)  //圓心為100/2，畫方框，設定框線與線條粗細
  stroke("#e9ff70")
  strokeWeight(2)
  rect(x,y,w+fc)  //方框以左上為座標點
  stroke(255,0,0)
  strokeWeight(2)  
  ellipse(x+50,y,w+fc)
}
  }
}

function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }

}