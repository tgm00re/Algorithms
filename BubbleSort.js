function bubbleSort(arr){   
    var swapped = true;
    while(swapped){
        swapped = false;
        for(let i = 0; i <= arr.length - 2; i++){
            if(arr[i] > arr[i+1]){
                const temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }
    return arr;
}


const arr = [5,4,2,6,8,14,1,3];
const sortedArr = bubbleSort([...arr])
console.log("Array: ")
console.log(arr);
console.log("Sorted Array: ")
console.log(sortedArr);