const binaryToNumber = str => {
    let sum = 0;
    let baseNum = 1; // 00101
    for(let i = str.length - 1; i >= 0; i--){
        if(str[i] === '1'){
            sum += baseNum;
        }
        baseNum *= 2;
    }
    return sum;
}



const numberToBinary = num => {
    let baseNum =  1;
    let binaryStr = "";

    //Find the base num that we want to start at.
    while(baseNum <= num){
        baseNum *= 2;
    }
    baseNum /= 2;

    //while num != 0, we continue to halve baseNum and add 1's and 0's.
    while(num != 0 || baseNum >= 1){
        if(baseNum <= num){
            num -= baseNum;
            binaryStr += '1';
        } else {
            binaryStr += '0';
        }
        baseNum /= 2;
    }

    return binaryStr;
}

console.log(binaryToNumber('10101'))

console.log(numberToBinary(4));