function convertCoinChange(money){ // Type in 00.00 format 
    let arr = [0,0,0,0];
    money = convertToValue(String(money));
    while(money >= 25){
        arr[0] += 1;
        money -= 25;
    }
    while(money >= 10){
        arr[1] += 1;
        money -= 10;
    }
    while(money >= 5){
        arr[2] += 1;
        money -= 5;
    }
    while(money >= 1){
        arr[3] += 1;
        money -=1;
    }
    return arr[0] +" quarter(s), " + arr[1] + " dime(s), " + arr[2] + " nickel(s), " + arr[3] + " pennie(s)." 
}

function convertToValue(moneyStr){ //3.21 ----> 321                .14 ---> 14
    if(moneyStr.indexOf(".") == 0){ // No dollars in the given amount
        return Number(moneyStr.substring(1,moneyStr.length));
    }
    let amount = Number(moneyStr.substring(moneyStr.indexOf(".") + 1,moneyStr.length)) + Number(Number(moneyStr.substring(0,moneyStr.indexOf("."))) * 100)
    return amount;
}

console.log(convertCoinChange(.00));