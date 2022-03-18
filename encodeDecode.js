const encode = (str) => {
    if(str.length <= 1){
        return str + str.length;
    }
    let newStr = "";
    let currentLetter = str[0];
    let currentCount = 1;
    for(let i = 1; i < str.length; i++){
        if(str[i] === currentLetter){
            currentCount++;
        } else{
            newStr += currentLetter + currentCount;
            currentLetter = str[i];
            currentCount = 1;
        }
    }
    newStr += currentLetter + currentCount;
    return newStr;
}


// a2b3c1 ---> aabbbc
const decode = (str) => {
    let newStr = ""; //Will be the string we return and add letters to
    let numStr = ""; //Will keep track of the current number
    let letter = ""; //Will keep track of the current letter
    for(let i = 0; i < str.length; i++){
        if(isNaN(str[i])){ //Check if str[i] is a letter
            if(numStr != ""){ 
                for(let i = 0; i < numStr; i++){
                    newStr += letter;
                }
            }
            numStr = "";
            letter = str[i];
        } else{ //str[i] is a number
            numStr += str[i];
        }
    }
    //Add the final letter numStr times
    for(let i = 0; i < numStr; i++){
        newStr += letter;
    }
    return newStr;
}


// console.log(encode("aaaabbbcccda"));
// console.log(encode("axaa"));
// console.log(encode("bacdbdacxabdcaa"));

console.log(decode("a2b3c1"));
console.log(decode("a2"));
console.log(decode("a23b3c1"));
console.log(decode("a2000c1"));
