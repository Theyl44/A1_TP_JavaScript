function celciusToFahrenheit(celcius)
{
    let fahra = (celcius*1.8)+32;
    return fahra;
}
function limit(x, inf ,sup)
{
  /*  if(x>sup)
    {
        x=sup;
    }
    else if(x<inf)
    {
        x=inf
    }
    return x;
    */
   x=Math.min(x,sup);
   x=Math.max(x,inf);
   return x;
}
function isPerfect(n)
{
    let somme=0;
    for(let i=0;i<n;i++)
    {
        if(n%i === 0)
        {
            somme = somme + i;
        }
    }
        return somme == n;
}
function nbDigits(n)
{
    let nbr=0;
    if(n>0)
    {
      while(n>=9)
     {
           nbr++;
            n = n/10;
     }
     nbr++;
       return nbr;
    }
    else
    {
        while(n<=(-9))
        {
            nbr++;
            n=n/10;
        }
        nbr++;
        return nbr;
    }
}
function isNarcissistic(n)
{ 
    let chiffre = n;
    let nbr = 0;
    let value;
    while(chiffre>10)
    {
        value = chiffre%10;
        nbr = nbr+(value*value*value);
        chiffre = Math.floor(chiffre/10);
    }
    value = chiffre%10;
    nbr = nbr+(value*value*value);
    if(nbr === n)
        return true;
    else
        return false;

} 

function main()
{   
    console.log(isNarcissistic(370));
}
main();