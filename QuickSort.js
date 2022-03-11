const quickSort = (arr) =>{
    if(arr.length <= 1){
        return arr;
    }
    const pivi = partition(arr);

    const leftHalf = arr.slice(0, pivi);
    const rightHalf = arr.slice(pivi + 1);

    const leftSide = quickSort(leftHalf);
    const rightSide = quickSort(rightHalf);

    return [...leftSide,arr[pivi], ...rightSide];

}



// const quickSort = (arr, lowerBound=0, upperBound=arr.length-1) => {
//     console.log("Array at start: " + arr);
//     if(arr.length <= 1){
//         return arr;
//     }

//     const pivotIndex = partition(arr);

//     const leftHalf = quickSort(arr,0,pivotIndex-1)
//     const rightHalf = quickSort(arr, pivotIndex-1)

//     return quickSort(leftHalf).concat(quickSort(rightHalf));
// }
//[4,6,9,1,2,5,3]
//[3,2,1,4,6,9,5]
//       4
//3,2,1    6,9,5
//    3    6
//2,1        5,9
//   2       5
//1           9    

//call the partition helpr on the arr
//when it returns the pivot and updated array
//recurversily call to the left and right


const partition = (arr) => { //O(N)
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[0];

    
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[j] < pivot){
            i++;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    arr.splice(0,1);
    arr.splice(i,0,pivot);
    return i;
}


// const partition = (arr, left, right) => {
//     let pivot = arr[left];
//     let pointer = left;

//     for(let i = left; i <= right; ++i){
//         if(arr[i] < pivot){
//             ++pointer;
//             [arr[i], arr[pointer]] = [arr[pointer],arr[i]];
//         }
//     }
//     [arr[left], arr[pointer]] = [arr[pointer],arr[left]];
//     return pointer;
// }



console.log(quickSort([100,100,12,50,-50,-100,-50]))