function colorRandom(){
    //   document.getElementById("colorButton").style.backgroundColor = rgb(randomCompoment(),randomCompoment(),randomCompoment());
    document.getElementById("colorButton").style.backgroundColor = 'rgb('+ramdomCompoment()+','+ramdomCompoment()+','+ramdomCompoment()+')';
}
function ramdomCompoment(){
    return 255*Math.random();

}
function main(){
    let okButton = document.getElementById("colorButton");
    okButton.addEventListener("click",colorRandom);
}


main();