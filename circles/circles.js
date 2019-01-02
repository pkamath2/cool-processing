
var top = 50;
var left = 350;
var i =0;var j =0;
function setup(){
    const canvas = createCanvas(1000, 1000);
    canvas.position(left, top);
    background('#fffaf0');
    frameRate(6)
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
    fill('black');
    var prevPoint = 0;
    for(var ang=0;ang<2*TWO_PI;ang+=TWO_PI/150){
        arc(x, y, r + level * Math.cos(ang * 12 - 2 * Math.PI / 3) * 32, r + level * Math.cos(ang * 12 - 2 * Math.PI / 3)  *32, prevPoint, ang, PIE);
        prevPoint = ang;
    }
    
}