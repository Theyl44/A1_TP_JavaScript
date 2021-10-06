function repeat(s, n)
{
    if(n <= 0){
        return undefined;
    }

    let s1 = "";

    while(n>0)
    {
        s1=s1+s;
        n--;
    }

    return s1;


}
function trunctate(s,n)
{
    let result="";
    if(n<0)
    {
        return undefined;
    }
    for(let i=0;i<n;i++)
    {
        result = result + s[i];
    }
    if(s.length>=n)
    {
    result = result + "...";
    }
    return result;
}
function isPalindrome(s)
{
    let s1= "";
    for (let i = 0; i < s.length; i++) {
        s1 = s[i] + s1;
    }
    if(s>s1)
    {
        return false;//erreur
    }
    if(s<s1)
    {
        return false;//erreur
    }
    return true;//pcq le mot et le mot inversé sont les mm
}
function swapCase(s) 
{
    let swaped ="";
    let s1 = s.toUpperCase();
    let s2 = s.toLowerCase();
    let i;
    let truc;
    for(i=0;i<s.length;i++)
    {
        truc = s[i];
        if(s[i]==s1[i])
        {
            swaped = swaped + s2[i];
        }
        if(s[i]==s2[i])
        {
            swaped = swaped + s1[i];
        }
    }
    return swaped;
}
function hexaDecimalToDecimal(hex)
{
    let dec=0;
    let puiss=1;
    let val;
    let test;
    for(let i=0;i<=hex.length;i++)
    {
        test = hex[i];
        if("ABCDEF".indexOf(test))
        {
            switch(test)
            {
                case 'A':
                    val=10;
                    break;
                case 'B':
                    val=11;
                    break;
                case 'C':
                    val=12;
                    break;
                case 'D':
                    val=13;
                    break;
                case 'E':
                    val=14;
                    break;
                case 'F':
                    val=15;
                    break;
            }
        }
        if(test == 1 || test == 2 || test == 3 || test == 4 || test == 5 || test == 6 || test ==  7 || test == 8 || test == 9)
        {
            val = test;
        }
        if(i>0)
        {
            while(i>0)
            {
                puiss = puiss *16;
                i--
            }
        }
            dec = dec + val*puiss;
    }
    return dec;        

}
