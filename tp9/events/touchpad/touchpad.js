function MoveOntouchPad(event){
    let touchPad = event.target;
    let r = touchPad.getBoundingClientRect();
    let axeX = (event.clientX-r.left)/85;
    let axeY = (event.clientY-r.top)/60;
    console.log(axeX,axeY);
    cerclegris(axeX,axeY);
}
function cerclegris(axeX,axeY){
    let canvas = document.getElementById("screen");
    let context = canvas.getContext("2d");
    r = canvas.getBoundingClientRect();

    context.beginPath();
    context.rect((r.left-30),(r.top-30),372,212);
    context.fillStyle="white";
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc(axeX*370,axeY*210,5,0,2*Math.PI);
    context.fillStyle="gray";
    context.fill();
    context.closePath();

}
function outTouchPad(){
    let canvas = document.getElementById("screen");
    let context = canvas.getContext("2d");
    r = canvas.getBoundingClientRect();
    context.beginPath();
    context.rect((r.left-30),(r.top-30),372,212);
    context.fillStyle="white";
    context.fill();
    context.closePath();
}

function main(){
    let touchPad = document.getElementById("touchpad");
    touchPad.addEventListener("mousemove",MoveOntouchPad);
    touchPad.addEventListener("mouseout",outTouchPad);
}


main();