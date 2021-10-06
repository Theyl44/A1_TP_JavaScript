function drawBackground(context)
{
    context.save();
    fillRoundedRectangle(context,50,50,500,500,100);
    context.beginPath();
    context.fillStyle="white";
    context.arc(300,300,225,0,2*Math.PI);
    context.fill();
    context.closePath();
    context.restore();
}
function drawnStyle(context)
{
    context.save();
    context.beginPath();
    context.fillStyle="black";
    context.arc(300,300,10,0,2*Math.PI);
    context.fill();
    context.closePath();
    context.restore();
}
function drawNumber(context,number){
    context.save();
    context.font = 'bolder 45px arial';
    context.textBaseline = "middle";
    context.textAlign = "center";

    context.translate(300,300);
    context.rotate(number*Math.PI/6);
    context.translate(0,-190);
    context.rotate(-number*Math.PI/6);
    context.fillText(number, 0, 0);
    context.restore();
}
function drawnNumber1(context, number)
{
		context.save();
		context.font = '10px arial';
		context.textBaseline = "middle";
		context.textAlign = "center";
		context.translate(300,300);
		context.rotate(number*Math.PI/30);
		context.translate(0,-160);
		context.rotate(-number*Math.PI/30);
		context.fillText(number, 0, 0);
		context.restore();
}
function drawHourHand(context,hours){
    context.save();
    context.beginPath();
    context.translate(300,300);
    context.rotate(-Math.PI/2);
    context.rotate(hours*Math.PI/6);
    context.strokeStyle="black";
    context.lineWidth=5;
    context.moveTo(0,0);
    context.lineTo(150,0);
    context.stroke();
    context.closePath();
    context.restore();
}
function drawMinuteHand(context,minute)
{
    context.save();
    context.beginPath();
    context.translate(300,300);
    context.rotate(-Math.PI/2);
    context.rotate(minute*2*Math.PI/60);
    context.strokeStyle="black";
    context.lineWidth=5;
    context.moveTo(0,0);
    context.lineTo(210,0);
    context.stroke();
    context.closePath();
    context.restore();
}
function drawSecondHand(context, secondes)
{
    context.save();
    context.translate(300,300);
    context.rotate(-Math.PI/2);
    context.beginPath();
    context.rotate(secondes*2*Math.PI/60);
    context.strokeStyle="red";
    context.lineWidth=5;
    context.moveTo(0,0);
    context.lineTo(210,0);
    context.stroke();
    context.closePath();
    context.restore();

}
function fillRoundedRectangle(context,x,y,width,height,radius){
	context.save();
	let r = x + width;
  	let b = y + height;
  	context.beginPath();
  	context.fillStyle="black";
	context.moveTo(x+radius, y);
	context.lineTo(r-radius, y);
	context.quadraticCurveTo(r, y, r, y+radius);
	context.lineTo(r, y+height-radius);
	context.quadraticCurveTo(r, b, r-radius, b);
	context.lineTo(x+radius, b);
	context.quadraticCurveTo(x, b, x, b-radius);
	context.lineTo(x, y+radius);
	context.quadraticCurveTo(x, y, x+radius, y);
	context.fill();
	context.restore();
}
function drawClock(continuousMove = false){
    let canvas = document.getElementById("clock");
    let context = canvas.getContext("2d");

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let milliseconds = now.getMilliseconds();


    drawBackground(context);


    for(let i=1;i<=12;i++)
    {
        drawNumber(context,i); 
    }
    for(let i=1;i<=60;i++)
    {
        drawnNumber1(context,i);
    }


    drawHourHand(context,hours+(minutes/60));
    drawMinuteHand(context,minutes+(seconds/60));
    drawSecondHand(context,seconds+(milliseconds/1000));
    drawnStyle(context);

}
drawClock();
setInterval(drawClock,10);

