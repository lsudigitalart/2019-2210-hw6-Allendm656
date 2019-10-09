var blink; 
var web;
var download1, download2, download3;
var crash;
var popup;

function preload(){
  blink = createImg("https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif")
  web = createImg("https://lh3.googleusercontent.com/QZgbg64L0OnMmMwYagx0RpjqFY_vwMawPRd7126XHz48nDWrLgeIf2ocu9TVDkA89WSoh0JTng=w640-h400-e365")
  download1 = createImg("https://static.vecteezy.com/system/resources/previews/000/562/188/non_2x/vector-download-download-button-illustration-data.jpg")
  download2 = createImg("https://thumbs.dreamstime.com/t/download-button-2468711.jpg")
  download3 = createImg("https://static.vecteezy.com/system/resources/previews/000/562/177/non_2x/download-download-button-illustration-data-vector.jpg")
  crash = createImg("https://3or3af2wx78n8r49a22mbxaz-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/BSOD-750x628.jpg")
  pop = createImg("https://zomalo.com/wp-content/uploads/2015/11/annoying-popup.jpg")
}



function setup() {
  createCanvas(1100, 500)
  background(0, 50, 150)
  blink.position(0, 0)
  blink.size(427, 500)
  blink.style("z-index","1")
  
  web.position(320, 0)
  web.size(780, 500)
  web.style("z-index", "2")

  download3.position(350, 300)
  download3.size(250, 125)
  download3.style("z-index","3")

  download1.position(580, 300)
  download1.size(250, 125)
  download1.style("z-index","4")

  download2.position(830, 275)
  download2.size(220, 190)
  download2.style("z-index","5")

  
}

function draw() {
  pop.position(830, 275)
  pop.size(220, 190)
  pop.style("z-index","6")

  crash.position(0, 0)
  crash.size(1100, 500)
  crash.style("z-index","0") 

}
