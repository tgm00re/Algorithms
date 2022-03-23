//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built in functions!!!

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]

const unionSorted = (arrLeft, arrRight) => {
    let newArr = [];
    let rightPointer = 0;
    for(let i = 0; i < arrLeft.length; i++){
        let leftValue = arrLeft[i];

        //arrRight will "catch up" to the value of arrLeft at index i.
        while(arrRight[rightPointer] < leftValue && rightPointer < arrRight.length){
            let rightVal = arrRight[rightPointer];
            if(arrRight[rightPointer] == rightVal){}
            while(arrRight[rightPointer] == rightVal){
                newArr.push(arrRight[rightPointer]);
                rightPointer++;
            }
            // if(added[arrRight[rightPointer]] != 1){
            //     added[arrRight[rightPointer]] = 1;
            //     newArr.push(arrRight[rightPointer]);
            // }
        }
        
        //If the arrays have equal values, we want to find which array has more of those values. We take whichever has more 
        //of them and then push that number of the values into the new array.
        if(arrRight[rightPointer] == leftValue){
            let rightCount = 0;
            let leftCount = 0;
            while(arrRight[rightPointer] == leftValue && rightPointer < arrRight.length){
                rightCount++;
                rightPointer++;
            }
            while(arrLeft[i] == leftValue && i < arrLeft.length){
                leftCount++;
                i++;
            }
            i--;

            greaterNum = rightCount; //Initially setting the greater count to the number of times the value appears in the right array
            if(rightCount < leftCount){
                greaterNum = leftCount
            } else if(rightCount == leftCount){
                greaterNum = 1;
            }
            for(let j = 1; j <= greaterNum; j++){
                newArr.push(leftValue);
            }
        } else{
            newArr.push(leftValue);
        }
    }
    while(rightPointer < arrRight.length){
        newArr.push(arrRight[rightPointer]);
        rightPointer++;
    }
    return newArr;
}

console.log(unionSorted([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(unionSorted([1,2,2,2,7],[2,2,6,6,7,7]));
console.log(unionSorted([1,5,9],[2,6,10]));

//return a new unsorted union multiset of two arrays
//essentially same as yesterday but your input is unsorted
//don't just sort the arrays, then do a union!
//[2,7,2,1,2], [6,7,2,7,6,2] returns [7,2,7,2,2,1,6,6]
//(or a different combination of the same numbers, since it's unsorted)

const unionUnsorted = (arrLeft,arrRight) => {
    
}

// console.log(unionUnsorted([2,7,2,1,2], [6,7,2,7,6,2]));
// console.log(unionUnsorted([2,1,10,7,9],[3,10,2,7,9,5,2]));
// console.log(unionUnsorted([2,2,7,1,2],[2,2,6,7,6]));





