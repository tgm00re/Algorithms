
//Given two sorted arrays, return a new array containing all the numbers they have in common.
//This includes duplicates!


const intersect = (arrLeft, arrRight) => {  //O(M * N)
    let newArr = [];
    let rightIndex = 0;
    for(let i = 0; i < arrLeft.length; i++){
        while(arrRight[rightIndex] < arrLeft[i] && rightIndex < arrRight.length){
            rightIndex++;
        }
        if(arrRight[rightIndex] === arrLeft[i]){
            newArr.push(arrLeft[i]);
            rightIndex++;
        }
    }
    return newArr;
}


console.log(intersect([2,4,7,9,10],[2,3,5,7,9,10]));
console.log(intersect([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
console.log(intersect([2,2],[2,2,2]));





