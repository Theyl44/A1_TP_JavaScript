function isLeap(year) {
    return ((year%4 === 0) && (year%100 !== 0)) || (year%400 === 0);
}   //Worked !

function getNbDays(year, month) {
    let dayTab=[31,28,31,30,31,30,31,31,30,31,30,31];
    if(isLeap(year))
    {
        dayTab[1]=29;
    }
    return dayTab[month-1];
}   //Worked !

function getDayInWeek(year, month, day) {
    let date= new Date(year, month-1, day);
    let days=date.getDay();
    if (days === 0)
    {
        days=7;
    }
    return days;
} //Worked !



function buildCalendar(element, year, month, day) {
    let monthTab=["January","February","March","April","May","June","July", "August","September","October","November","December"];
    let dayTab=["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"];

    let date1= `<div id="principal" style="border: 1px solid #2d9399; width: 254px;">
                    <div style="border: 1px solid #99478b; text-align: center; padding: 0.5rem;">
                        <div id="month1">${monthTab[month - 1]}</div>
                        <div id="year1">${year}</div>
                    </div>                                                                   
                    
                    <table id="table1" ></table>
                </div>`;                                                                                        //Création : Div & Table
    element.insertAdjacentHTML("beforeend", date1);


    let cadreP=document.querySelector("#table1");

    let case1= `<thead><tr id="trHead" ></tr></thead>`;            //Table tHead
    cadreP.insertAdjacentHTML("beforeend", case1);
    let case2= `<tbody id="tbody"></tbody>`;                        //Table tBody
    cadreP.insertAdjacentHTML("beforeend", case2);



    // Jours de la semaines
    for (let i=0; i<7; i++)
    {
        let case3= `<th class="day">${dayTab[i]}</th>`;
        document.querySelector("#trHead").insertAdjacentHTML("beforeend", case3);
    }

    caseNumberOn(year, month, day);                 // Numbre de 1 à 31max dans le calender;

    document.querySelector("#datepickerInput").value=`${year}-${luncher(month)}-${luncher(day)}`;



    let nb89=document.querySelector("#datepickerInput").value[1];
    console.log(nb89);

}

function caseNumberOn(year, month, day) {
    let numberOfDay=getNbDays(year,month);
    let pool =getDayInWeek(year, month, 1);

    for (let k=1; k<=35; k++)
    {
        if((k%7) === 1 || k===1)
        {
            let line1=`<tr class="trBody2"></tr>`;
            document.querySelector("#tbody").insertAdjacentHTML("beforeend", line1);
        }

        let case4= `<td class="numberCase" style="border: 1px solid #999; padding: 0.5rem; cursor: pointer;">${k-pool+1}</td>`;
        document.querySelector("#tbody").lastChild.insertAdjacentHTML("beforeend", case4);

        coloredCase(k, pool, day, numberOfDay);
    }
}



function coloredCase(k, pool, day, numberDay) {

    if (k-pool+1 === day)
    {
        document.querySelector("#tbody").lastChild.lastChild.style.backgroundColor="DarkTurquoise";
    }

    if ((k > numberDay+pool-1)  || (k < pool))
    {
        document.querySelector("#tbody").lastChild.lastChild.textContent = "";
    }

}

function caseOn(event)
{
    let case1=event.target;
    console.log(case1.style.backgroundColor);

    if(case1.style.backgroundColor !== "darkturquoise" && case1.textContent !== "")
    {
        case1.style.backgroundColor="Fuchsia";
    }



}

function caseOut(event)
{
    let case1=event.target;

    console.log(case1.style.backgroundColor);

    if(case1.style.backgroundColor !== "darkturquoise") {
        case1.style.backgroundColor = "white";
    }
}

function clickedCase(event)
{
    let case1=event.target;
    for (let i=0; i<5;i++)
    {
        for (let k=0;k<7;k++)
        {
            document.querySelector("#tbody").children[i].children[k].style.backgroundColor="white";
        }

    }
    if (case1.textContent !== "")
    {
        case1.style.backgroundColor="DarkTurquoise";
    }

    let day=case1.textContent;
    let month=10;
    let year=document.querySelector("#year1").textContent;

    document.querySelector("#datepickerInput").value=`${year}-${luncher(month)}-${luncher(day)}`;

}

function luncher(number) {
    if (parseInt(number)<10)
    {
        number= "0"+number;
    }
    return number
}



function main() {

    let datepicker=document.querySelector("#lol");
    buildCalendar(datepicker, 2019, 12, 1);

    let numberCase=document.querySelector("#tbody");
    numberCase.addEventListener("mouseover", caseOn);


    numberCase.addEventListener("mouseout", caseOut);

    let clickCase=document.querySelector("#tbody");
    clickCase.addEventListener("click", clickedCase);

}


main();