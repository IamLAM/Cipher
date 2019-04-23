function rot13(str) {
    let i = 0;
    let j = 0;
    let pos = 0;
    let posm = 0;
    let posf = 0;
    let w;
    let ca = [];
    alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    while (i < str.length) {
        w = str.charAt(i);
        if (alpha.indexOf(w) > -1) {
            pos = alpha.indexOf(w); // return position
            posm = pos + 13; //40
            console.log("word:" + w + " Sustituye: " + alpha[posm + 13] + " " + pos + " suma: " + pos + "+" + 13 + "=" + posm); //max 26
            ca.push(alpha[posm]);
        } else {
            console.log("space or number or signal");
            ca.push(w);
        }
        i++;
    }
    console.log(ca);
    str = ca.join("");
    console.log(str);
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));