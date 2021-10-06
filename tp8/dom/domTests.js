function fromP1ToP10Test(){

    selectElements(fromP1ToP10());
}

function fromP10ToP8Test(){

    selectElements(fromP10ToP8());
}

function fromP6ToP2Test(){

    selectElements(fromP6ToP2());
}

function search1Test(){

    selectElements(search1());
}

function search2Test(){

    selectElements(search2());
}

function search3Test(){

    selectElements(search3());
}

function getElementByIdTest(id){

    selectElements(getElementById(id));
}

function selectElements(elements){

    if(!elements){  // does nothing on null or undefined
        return;
    }
    // maps an element to an array of one element if necessary
    if(!elements.length){
        elements = [elements];
    }

    for(let element of elements){

        if(element && element.className && element.className.indexOf("selected") < 0){
            element.className += " selected";
        }
    }

}

