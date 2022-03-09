const insertionSort = (arr) => {
    //traverse through entire array
    for(let i = 1; i < arr.length; i++){
        let j = i-1;
        let num = arr[i];
        while(num < arr[j] && j >= 0){ 
            //Swap values until they don't need to be swapped or reach theß
            arr[j+1] = arr[j];
            arr[j] = num;
            j--;
        }
    }
    return arr;
}

console.log(insertionSort([6,8,1,2,-100,0,50,12,32]))