const isPangram = (str) => {
    const upperStr = str.toUpperCase();
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i = 0; i < str.length; i++){
        if(alphabet.includes(upperStr[i])){
            alphabet.splice(alphabet.indexOf(upperStr[i]), 1);
        }
    }
    if(alphabet.length == 0){
        return true;
    }
    return false;
}


const isPangramRefactor = (str) => {
    const upperStr = str.toUpperCase();
    const letters = {};
    for(let i = 0; i < str.length; i++){
        if(upperStr[i] >= "A" && upperStr[i] <= "Z"){
            letters[upperStr[i]] = 1;
        }
    }
    if(Object.keys(letters).length == 26){
        return true;
    }
    return false;
}

// console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));
// console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));
// console.log(isPangram("Sphinx of black quartz, judge my vow"));
// console.log(isPangram("A"));

console.log(isPangramRefactor("Waxy and quivering, jocks fumble the pizza."));
console.log(isPangramRefactor("The quick brown fo jumps over the lazy sleeping dog"));
console.log(isPangramRefactor("Sphinx of black quartz, judge my vow"));
console.log(isPangramRefactor("A"));



const isPerfectPangram = (str) => {
    const upperStr = str.toUpperCase();
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i = 0; i < str.length; i++){
        if(upperStr[i] >= "A" && upperStr[i] <= "Z"){
            if(!alphabet.includes(upperStr[i])){
                return false;
            } else{
                alphabet.splice(alphabet.indexOf(upperStr[i]), 1); 
            }
        }
    }
    if(alphabet.length == 0){
        return true;
    }
    return false;
}

const isPerfectPangramRefactor = (str) => {
    const upperStr = str.toUpperCase();
    const letters = {};
    for(let i = 0; i < str.length; i++){
        if(upperStr[i] >= "A" && upperStr[i] <= "Z"){
            if(letters[upperStr[i]] == 1){
                return false;
            } else{
                letters[upperStr[i]] = 1;
            }
        }
    }
    if(Object.keys(letters).length == 26){
        return true;
    }
    return false;
}

// console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
// console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true
// console.log(isPerfectPangram("Mr. Jock, TV quiz PhD., bags few lynx.")) //Should be true
// console.log(isPerfectPangram("The five boxing wizards jump quickly.")) //Should be false

// console.log(isPerfectPangramRefactor("The quick brown fox jumps over the lazy sleeping dog"));//should be false
// console.log(isPerfectPangramRefactor("qrstuvwxyzabcdefghijkLMNOP"));//should be true
// console.log(isPerfectPangramRefactor("Mr. Jock, TV quiz PhD., bags few lynx.")) //Should be true
// console.log(isPerfectPangramRefactor("The five boxing wizards jump quickly.")) //Should be false