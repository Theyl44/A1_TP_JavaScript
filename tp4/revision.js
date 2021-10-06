function Rsum(numbers){
    let somme=0;
    for(let i=0;i<numbers.length;i++)
    {
        somme = somme = numbers[i];
    }
    return somme;
}
function Name(List){
    let max="";
    let Wlenght=List[0].length;
    for(let i=0;i<List.length;i++){
        if(List[i].length>Wlenght)
        {
            Wlenght=List[i].length;
            max = List[i];
        }
    }
    return max;
}
function RnbOccurences(WordList,word){
    let count=0;
    let words=WordList.split(" ");
    for(let i=0;i<words.length;i++)
    {
        if(word==words[i])
        {
            count++;
        }
    }
    return count;
}