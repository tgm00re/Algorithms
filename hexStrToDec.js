//Take ina  string representing an int in hexadecimal
//notation and return the value in decial notation
//give 1D2 return 466
const hexStrToDec = (str) => {
    let numDict = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        "A": 10,
        "B": 11,
        "C": 12,
        "D": 13,
        "E": 14,
        "F": 15
    }
    let sum = 0;
    let exponent = 0;
    for(let i = str.length - 1; i >= 0; i--){
        sum += (numDict[str[i]] * (16 ** exponent))
        exponent++;
    }
    return sum;
}
// console.log(hexStrToDec("1D2"));
// console.log(hexStrToDec("7D0"));
// console.log(hexStrToDec("3E8"));
// console.log(hexStrToDec("C8"));

