function rot13(str) {
    let i = 0;
    let j = 0;
    let pos = 0;
    let posm = 0;
    let posf = 0;
    let w;
    let ca = [];
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    console.log(str);

    console.log("Longitud: " + alphabet.length);
    //console.log(alphabet.indexOf("F"));
    while (i < str.length) {
        // console.log(i);
        w = str.charAt(i);
        console.log(str.charAt(i));
        posm = 0;
        pos = 0;
        if (alphabet.indexOf(w) > -1) {
            pos = alphabet.indexOf(w);
            posm = pos + 13; //40
            console.log(pos + " suma: " + pos + "+" + 13 + "=" + posm); //max 26
            console.log("Sustituye=" + str.charAt(posm));
            ca.push(str.charAt(posm));
        } else {
            console.log("space or number or signal");
            ca[i] = "O";
        }
        i++;
    }
    console.log(ca);
}

console.log(rot13("SERR PBQR! PNZC"));