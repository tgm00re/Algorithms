//combine two pre-sorted arrays into one sorted array
///Return the newly combined array
//Bonus Challenge: Combine in place into leftArr instead of a new array



const combine = (leftArr, rightArr) => {
    let j = 0;
    for (let i = 0; i < leftArr.length; i++){
        while(rightArr[j] < leftArr[i] || rightArr[j] == leftArr[i]){
            leftArr.splice(i,0,rightArr[j]);
            j++;
        }
    }
    leftArr.push(...rightArr.slice(j));
    return leftArr;
}

console.log(combine([1,2,7,9],[0,3,4,6,11]));
// console.log(combine([0],[1]))
// console.log(combine([0,1,2], [0,1,3]))




