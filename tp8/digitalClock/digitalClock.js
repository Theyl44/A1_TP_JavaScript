function addSegments(digitId){
    let digit = document.querySelector(`#${digitId}`);
    for(let i=0; i<7 ; i++){
        let item  = `<div class='off segment${i} segment'> ${i} </div>`
        digit.insertAdjacentHTML("beforeend",item);
    }
}

function updateDigit(digitId, value){

    let digit = document.querySelector(`#${digitId}`);
    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];
    for(let i=0; i<7 ;i++){
        let item = digit.children[i];
        if(segmentStates[value][i]==1) {
            item.classList.remove('off');
        }
        else{
            item.classList.add("off");
        }
    }
}



function deux_point(seconds) {
    let colons=document.querySelector("#colon");
    if(seconds%2==0)
    {
        colons.classList.remove("off")
    }
    else
    {
        colons.classList.add("off")
    }
}
function init(){

    addSegments('hours-tens');
    addSegments('hours-units');
    addSegments('minutes-tens');
    addSegments('minutes-units');
}
function time(){

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if(minutes <10){
    
        updateDigit('minutes-tens',0);
        updateDigit('minutes-units',minutes);
    }
    else{
        let tens = Math.trunc(minutes/10);
        let units = minutes%10;
        updateDigit('minutes-tens',tens);
        updateDigit('minutes-units',units);
    }
    if(hours <10){
        updateDigit('hours-tens',0);
        updateDigit('hours-units',hours);
    }
    else{
        let tens = Math.trunc(hours/10);
        let units = hours%10;
        updateDigit('hours-tens',tens);
        updateDigit('hours-units',units);
    }
    deux_point(seconds);
}
function main(){

    init();
    time();
}


main();
setInterval(time,1000);
