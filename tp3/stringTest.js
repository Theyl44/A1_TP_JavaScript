function repeatTests()
{
    console.log(repeat("foo",3));
}
function trunctateTests(s,n)
{
    console.log(trunctate("unchanged text", 20));
    console.log(trunctate("unchanged text", 14)); 
    console.log(trunctate("unchanged text", 10));
}
function isPalindromeTests(s)
{
    console.log(isPalindrome("bonjour")); // => false
    console.log(isPalindrome("toto")); // => false
    console.log(isPalindrome("kayak")); // => true
    console.log(isPalindrome("ressasser")); // => true
}
function swapCaseTests(s)
{
    console.log(swapCase("HELLO")); // => hello
    console.log(swapCase("bye")); // => BYE
    console.log(swapCase("GooD NighT")); // => gOOd nIGHt
}
function hexadecimalToDecimalTests(hex)
{
    console.log(hexaDecimalToDecimal("F")); // => 15
    console.log(hexaDecimalToDecimal("11")); // => 17
    console.log(hexaDecimalToDecimal("7DE")); // => 2014
}
function mirrorTests(s)
{
    console.log(mirror("abcxyz")); // => zyxcba
    console.log(mirror("javascript")); // => qzezhxirkg
    console.log(mirror(mirror("identique"))); // => identique
}
