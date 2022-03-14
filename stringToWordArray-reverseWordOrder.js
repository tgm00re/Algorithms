const stringToWordArray = (str) => {
    let counter = 0;
    let strArr = [];
    while(counter < str.length){
        let strToAdd = "";
        while(str[counter] != " " && counter < str.length){
            strToAdd += str[counter]
            counter++;
        }
        counter++;
        if(strToAdd != ""){
            strArr.push(strToAdd);
        }
    }
    return strArr;
}

console.log(stringToWordArray("  Hello  world"));


const reverseWordOrder = (str) => {
    let strArr = stringToWordArray(str);
    let newStr = "";
    for(let i = strArr.length - 1; i >= 0; i--){
        newStr += " " + strArr[i];
    }
    return newStr;
}



console.log(reverseWordOrder("Hello World I am Toemas"))