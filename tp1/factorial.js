function factorial(n){
    let result = 1;
    for(let i=1; i <=n; i++){
    result *= i;
    }
    return result;
   }
   function main(){
    let n = 6;
    let f = factorial(6);
    console.log("factorial(" + n + ") = " + f);
   }
   main();  
   main();
