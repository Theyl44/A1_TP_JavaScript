function functionabs(numbers){
    let absNumber = 
    numbers.map(function(number){
        number =  Math.abs(number);
        return number
    });
    return absNumber;
}
function evenOnly(numbers){
    let tab = 
    numbers.filter(function(number){
        return number%2==0;
    });
    return tab;
}
function sum(numbers){
    let sumNumber=
    numbers.reduce(function(sum,number){
        return sum = sum +  number;
    });
    return sumNumber;
}
function flattend2D(array){
    let tabflated = 
    array.reduce(function(number,array)
    {
        return number.concat(array);
    });
    return tabflated
}
function removeDuplicates(values){
    let tabremoved = [];
    tabremoved = values.filter(function(number)
    {
        //utiliser IndexOf
    });
    return tabremoved;
}