function getColored(value)
{
    let x=document.querySelector("#"+value);

    return x.value;
}



function setColor1()
{

    let red=document.querySelector("input[name='rValue']");
    let rColor=red.value;

    let green=document.querySelector("input[name='gValue']");
    let gColor=green.value;

    let blue=document.querySelector("input[name='bValue']");
    let bColor=blue.value;

    let cadre=document.querySelector("#preview");
    cadre.style.backgroundColor = "rgb("+rColor+","+gColor+","+bColor+")";


    let rgb=document.querySelector("#test");
    rgb.innerHTML="rgb("+getColored("rValue")+","+getColored("gValue")+","+getColored("bValue")+")";
}



function main(){

    let body=document.querySelector("body");
    body.innerHTML += "<div id='test'></div>";

    let slider1=document.querySelector("#sliders");
    slider1.addEventListener('input', setColor1);



}


main();