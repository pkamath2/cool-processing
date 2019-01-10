
const limit = 150;
var shim = 0;
var startAngle = 0;
var endAngle = 0;  
function setup(){
   shim = 0;
   startAngle = shim;
   endAngle = shim; 
   const canvas = createCanvas(windowWidth, windowHeight);
   background('black')
   stroke('white')
   noLoop();
}

function draw(){
    noFill();
    computeNumbers()
}

function computeNumbers(){
    var recaman_seq = []
    recaman_seq[0] = 0;
    for(var k=1;k<limit;k++){
        var a = recaman_seq[k-1] - k;
        if(a < 0 || recaman_seq.indexOf(a) > -1){
            a = recaman_seq[k-1] + k;
        }
        recaman_seq[k] = a;
        var diameter = recaman_seq[k] - recaman_seq[k-1];
        var x = (recaman_seq[k] + recaman_seq[k-1])/2
        if(startAngle == shim){
            startAngle = PI+shim;
            endAngle = shim;
        }else {
            startAngle = shim;
            endAngle = PI+shim;
        }
        //ellipse(x*7, height - y, 1, 1)
        arc(x*7, height/2, diameter*7, diameter*7, startAngle, endAngle);
        
    }
    console.log(recaman_seq)
    return recaman_seq;
}