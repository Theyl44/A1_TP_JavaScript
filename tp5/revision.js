function Rabs(numbers){
    let tab=numbers.map(
        function(number){
            if(number<0)
            {
                number = -1*number;
            }
            return number;
    });
    return tab;
}