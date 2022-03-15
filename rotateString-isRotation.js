//Create a standalone function that accepts a strings and an integer, and rotates the characters in the string to the right by that amount.
//Must be done without built-in functions
//Example: "Did I shine my shoes today?", 9      -->
//"es today? Did I shine my sho"

const rotateString = (str, num) => {
    const strLen = str.length;
    const newStrArr = [];
    for(let i  = 0; i < strLen; i++){
        const x = i + num;
        const newIndex = x % strLen;
        newStrArr[newIndex] = str[i]; 
    }
    let newStr = "";
    for(let i = 0 ; i < newStrArr.length; i++){
        newStr += newStrArr[i];
    }
    return newStr;
}

console.log(rotateString("Did I shine my shoes today?", 9));




//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true

const isRotation = (str1, str2) => {
    for(let i = 0; i <= str1.length; i++){
        if(rotateString(str1, i) === str2){
            return true;
        }
    }
    return false;
}

console.log(isRotation("hello", "lehlo"));