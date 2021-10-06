function RsumTest(){
    console.log( Rsum([1,2,3]) ); // => 0
    console.log( Rsum([42,404,1337]) ); // => 1783
}
function NameTest(){
    console.log(Name(["Salut","Theo","Leo","Paul BRION","Piere"]));
}
function RnbOccurencesTest(){
    let text = "bar qux baz foo bar foo qux foo";

    console.log(RnbOccurences(text, "foo")); // => 3
    console.log(RnbOccurences(text, "quux")); // => 0
    console.log(RnbOccurences(text, "baz")); // => 1
}