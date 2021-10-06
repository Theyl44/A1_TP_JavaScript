function drawnBackground(context)
{
	context.fillRect(50, 50, 500, 500);
	context.fillStyle = "green";
	context.save();
    context.beginPath();
    context.fillStyle = "aqua";
    context.arc(300, 300, 225, 0, 2*Math.PI);
    context.closePath();
    context.fill();

    context.restore();
}

function drawnNumber(context, number)
{
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


function drawHourHand(context, hours)
{
	context.save();
	context.strokeStyle = "black";
	context.lineWidth = 5;
	context.lineCap = 'round';
	context.beginPath();
	context.translate(300,300);
	context.moveTo(0, 0);
	context.rotate(hours*Math.PI/6);
	context.lineTo(0, -150);
	context.stroke();
	context.restore();
}

function drawMinutesHand(context, minutes) 
{
	context.save();
	context.strokeStyle = "black";
	context.lineWidth = 5;
	context.lineCap = 'round';
	context.beginPath();
	context.translate(300,300);
	context.moveTo(0, 0);
	context.rotate(minutes*Math.PI/30);
	context.lineTo(0, -190);
	context.stroke();
	context.restore();
}

function drawSecondHand(context, seconds)
{
	context.save();
	context.strokeStyle = "red";
	context.lineWidth = 5;
	context.lineCap = 'round';
	context.beginPath();
	context.translate(300,300);
	context.moveTo(0, 0);
	context.rotate((seconds)*Math.PI/(30));
	context.lineTo(0, -210);
	context.stroke();
	context.restore();
}

function centerClock(context)
{
	context.save();
	context.beginPath();
    context.fillStyle = 'black';
    context.arc(300, 300, 15, 0, 2*Math.PI);
    context.closePath();
    context.fill();
    context.restore();
}


function drawClock(){

    let canvas = document.getElementById("clock");
    let context = canvas.getContext("2d");
 	drawnBackground(context);

 	context.lineJoin = "round";
	context.lineWidth = 20;

 	for (let i=1; i<=12; i++)
 	{
 		drawnNumber(context, i);
 	}

 	for (let k=1; k<=60; k++)
 	{
 		drawnNumber1(context, k);
 	}

 	

 	let now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	let milliseconds = now.getMilliseconds();
	let day = now.getDate();
	let month = now.getMonth();
	let year = now.getFullYear();




 	drawHourHand(context, hours+(minutes/60));
 	drawMinutesHand(context, minutes+(seconds/60));
 	drawSecondHand(context, seconds+(milliseconds/1000));
 	centerClock(context);

 	requestAnimationFrame(drawClock);
 	//setInterval(drawClock, 1000);
 	
 
}

drawClock();