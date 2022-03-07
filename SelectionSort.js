function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let min = arr[i];
        let minIndex = i;
        let temp = arr[i];
        for(let j = i; j < arr.length; j++){
            if(arr[j] < min){
                min = arr[j];
                minIndex = j;
            }
        }
        arr[i] = min;
        arr[minIndex] = temp;
    }
    return arr;
}


console.log(selectionSort([8,7,6,5,4,3,2,1,-5,10]))



//traverse through arr
    //set current min, minIndex, temp
    //Traverse from i to length
        //if current index < min
            //min = currentIndex
