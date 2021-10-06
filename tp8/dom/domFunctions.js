// ---------------- Part 2 -------------------

function fromP1ToP10(){

    let p1 = document.getElementById("p1");

    // TODO :  navigate in the DOM tree from p1 to the paragraph identified by "p10"
    let p10;
    p10 = p1.nextElementSibling.nextElementSibling.nextElementSibling;
    return p10;

}

function fromP10ToP8(){

    let p10 = document.getElementById("p10");

    // TODO :  navigate in the DOM tree from p10 to the paragraph identified by "p8"
    let p8;
    p8 = p10.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild;

    return p8;

}


function fromP6ToP2(){

    let p6 = document.getElementById("p6");

    // TODO : navigate in the DOM tree from p6 to the paragraph identified by "p2"
    let p2;
    p2 = p6.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild;
    return p2;

}

// ---------------- Part 3 -------------------

function search1(){

    let elements;       // TODO : initialize elements
    elements = document.getElementsByClassName("green");
    return elements;
}

function search2(){

    let elements;      // TODO : initialize elements
    elements = document.querySelectorAll("p~p");//~ sert a selection les freres de meme noveau 
    return elements;
}

function search3(){

    let elements;       // TODO : initialize elements
    elements = document.querySelectorAll(".red+p");
    return elements;
}


// ---------------- Optional -------------------

function getElementById(id){
    // TODO : implement
    let Lenght = document.size; //number of nodes
    let pTemp = document;
    for(let i = 0 ;i<Lenght ;i++){
        if(pTemp.querySelector(id)){
            return pTemp;
        }
        if(pTemp.children==NULL){//condition
            pTemp = pTemp.parent;
        }
        else{
            pTemp = pTemp.children;
        }
    }
    return null;
}
