
//See documentation at - http://algorithmicbotany.org/papers/abop/abop-ch1.pdf
var line_length = 5;
var angle = 90;
var total_iter = 5; 
var starting_state = 'F-F-F-F';
var rule = 'F-FF--F-F';

function setup(){
   const canvas = createCanvas(500,500);
   canvas.position(600,50); 
   background('#fffaf0')
   angleMode(DEGREES);
   noLoop();
}

function draw(){
    translate(width - width/9, height/2);
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