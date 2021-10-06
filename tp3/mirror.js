function mirror(s) {
    let lettre;
    let nbr;
    let mot = 0;
    for (let i = 0; i <= s.length; i++) {
        lettre = s[i];
        if (lettre >= 'a' && lettre <= 'z') {
            mot = s[i] + 32;
        }
    }
    return mot;
}
