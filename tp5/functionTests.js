function absTests(){
    let numbers = [-42, 3, 0, -1, 100];
    let absNumbers = functionabs(numbers);
    console.log(absNumbers); // => [42, 3, 0, 1, 100]
    console.log(numbers); // => [-42, 3, 0, -1, 100]
}
function evenOnlyTests(){
    console.log( evenOnly([0,1,2,3,4]) ); // => [0, 2, 4]
}
function sumTests(){
    console.log( sum([42,404,1337]) ); // => 1783
}
function flatten2DTests() {
    console.log(flatten2D([[1, 2], [3, 4], [5, 6]])); // [1, 2, 3, 4, 5, 6]
    console.log(flatten2D([[1, 2], [3, 4, 5], [6]])); // [1, 2, 3, 4, 5, 6]
}
function removeDuplicatesTests(){
    console.log( removeDuplicates([]) ); // => []
    console.log( removeDuplicates([1,2,3,4]) ); // => [1,2,3,4]
    console.log( removeDuplicates([1,2,3,2,4,3,1,1]) ); // => [1,2,3,4]
}

