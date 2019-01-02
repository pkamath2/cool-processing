
var line_length = 1;
var angle = 60;
var total_iter = 5; 
var starting_state = 'F++F++F';
var rule = 'F-F++F-F';

function setup(){
   const canvas = createCanvas(500,500);
   canvas.position(550,50); 
   background('#fffaf0')
   angleMode(DEGREES);
   noLoop();
}

function draw(){
    translate(width/4, height - height/3);
    var new_state = computeSystem(starting_state);
    drawSystem(new_state);

}

function computeSystem(state){
    for(var k=0;k<total_iter;k++){
        state = state.replace(/F/g,rule);
    }
    //console.log(state)
    return state;
}

function drawSystem(state){
    var s = state.split('');
    for(var i=0;i<s.length;i++){
        if(s[i] == 'F') {
            line(0, 0, line_length, 0);
            translate(line_length,0);
        }
        if(s[i] == '+') rotate(-1 * angle);
        if(s[i] == '-') rotate(angle);
    }
}