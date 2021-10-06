
function pressed(event){
    if(event.key === 'a' || event.key === 'z' || event.key === 'e' || event.key === 'r' || event.key === 't' || event.key === 'y')
    {
        let key=document.querySelector("#key-"+event.key);
        key.classList.add("pressed");
    }
}
function unpressed(){
    if(event.key === 'a' || event.key === 'z' || event.key === 'e' || event.key === 'r' || event.key === 't' || event.key === 'y')
    {
        let key=document.querySelector("#key-"+event.key);
        key.classList.remove("pressed");
        key.classList.add("released");
    }
}
function main(){
    document.body.addEventListener("keydown",pressed);
    document.body.addEventListener("keyup",unpressed);
}


main();