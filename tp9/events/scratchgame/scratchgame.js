function init(){
    let body = document.children[0].children[1];
    for(let i = 0;i < 100; i++){
        let div = document.createElement('div');
        div.classList.add("cell");
        body.children[0].appendChild(div);
        div.style.opacity = 1;
    }
}
function move(event){
    let opa = event.target;
    opa.style.opacity = opa.style.opacity - 0.3 ;
    ;
}
function main(){
    init();
    let img = document.getElementById("game");
    img.addEventListener("mousemove",move);
}

main();