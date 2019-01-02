
var top = 50;
var left = 350;
var i =0;var j =0;
function setup(){
    const canvas = createCanvas(1000, 1200);
    canvas.position(left, top);
    background('#fffaf0');
    frameRate(60)
    //noLoop();
}

function draw(){
    var level = 0
    drawSquiggles(80+140*i,100+140*j, 30, j/10, frameCount);
    i++;
    if(i==7) {
        j++;
        i=0;
    }
    if(j==8){
        noLoop();
    }
}

function drawSquiggles(x, y, r, level, f){
    // fill('black');
    noStroke();
    var prevPoint = 0;
    for(var ang=0;ang<2*TWO_PI;ang+=TWO_PI/300){
        var ar = r + level * Math.cos(ang * 12 - 2 * Math.PI / 3) * 100;
        var arColor = 60 + Math.floor((ar)*300/50);
        var hsl = 'hsl('+arColor+','+Math.floor(ar)+'%,'+level*100+'%)';
        console.log(level, hsl)
        fill(color(hsl));
        arc(x, y, ar, ar, prevPoint, ang, PIE);
        prevPoint = ang;
    }
    
}