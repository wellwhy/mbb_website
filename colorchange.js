var rss = document.getElementById("rss");
var a = (Math.random() * 216) + 90;
var b = (Math.random() * 216) + 90;
var c = (Math.random() * 216) + 90;
var downA = 1;
var downB = 1;
var downC = 1;
var speedA = 4;
var speedB = 4;
var speedC = 4;
var going;
function colorChange(){
	if(a >= 256){
    	downA = -1;
        speedA = (Math.random() * 4) + 2;
    }
	if(b >= 256){
    	downB = -1;
        speedB = (Math.random() * 4) + 2;
    }
	if(c >= 256){
    	downC = -1;
        speedC = (Math.random() * 4) + 2;
    }
        
	if(a <= 90)
    	downA = 1;
    if(b <= 90)
    	downB = 1;
    if(c <= 90)
        downC = 1;
        
    if(Math.abs(a-b) < 90 && Math.abs(a-c) < 90){
        if(downA == -1)
            downA = 1;
        else
            downA = -1;
    }
    else if(Math.abs(b-c) < 90){
        if(downB == -1)
            downB = 1;
        else
            downB = -1;
    }
    rss.style.backgroundImage = "linear-gradient("+ rgb(a,b,c) + " , " + rgb(c,b,a) + " , " + rgb(b,a,c) + ")" ;
    a += Math.random() * speedA * downA;
    b+= Math.random() * speedB * downB;
    c += Math.random() * speedC * downC;
    going = setTimeout(colorChange,10);
}
function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}

function clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }