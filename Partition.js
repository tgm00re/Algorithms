//Partition the array around the value at arr[0]
//without creating new  array
//values left of the original pivot should be less than the pivot
//values rights of the pivot should be >= the pivot value
//Note: Each side of the partitioned value does not have to be sorted
//Return the newly partitioned array
//Bonus: return the index where the value at 0 ends up
//[5,4,9,2,5,3] -> [4,2,3,5,9,5], return 3

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
    console.log("Pivot Index: " + (i));
    return arr;
}


console.log(partition([50,51,30,12,200,100]));
