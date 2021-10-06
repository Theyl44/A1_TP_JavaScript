function sum (numbers)
{
    let result = 0;
    for(let i=0;i<numbers.length;i++)
    {
        result = result + numbers[i];
    }
    return result;
}function sum2 (numbers)
{
    let result = 0;
    for(let number of numbers)
    {
        result += number;
    }
    return result;
}
function longuestWord(words){
    let max = "";
    for(let word of words)
    {
        if(word.length > max.length)
        {
            max = word;
        }
    }
    return max;
}
function range(min, max , step){
    let t = [];
    let j = 0;
    for(let i = min; i<=max; i = i + step)
    {
        t[j]=i;
        j++;
    }
    return t;
}
function nbOccurences(wordList, word){
    let words = wordList.split(" ");
    let count=0;
    for(let chaine of words)
    {
        if(word == chaine)
        {
            count++;
        }
    }
    return count;
    
}
function flatten2D(array){
    let exit=[];
    exit = array.flat();
    return exit;
}
function nbOccurences2(wordList, word){  
    let words = wordList.split(" ");
    let count = 0;
    console.log(word,words);
    return count;
   
}