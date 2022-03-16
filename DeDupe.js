//Remove duplicates including punctuation.
//Keep only last instance of each character.
//"Snaps! crackles! pops!" -> "Snrackle ops!"

const includesOverride = (str, char) => {
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            return true;
        }
    }
    return false;
}

const dedupe = (str) => {
    let newStr = "";
    for (let i = str.length-1; i >= 0; i--){
        if(!includesOverride(newStr,str[i])){
            newStr = str[i] + newStr;
        }
    }
    return newStr;
}





console.log(dedupe("abcdab"));