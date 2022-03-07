function binarySearch(arr, val){
    if(arr.length <= 1){
        return -1;
    }
    let n = Math.floor(arr.length / 2);
    if(val == arr[n]){
        return true;
    } else if(val < arr[n]){
        let newArr = arr.slice(0,n);
        return binarySearch(newArr, val);
    } else{ // val > arr[n]
        let newArr = arr.slice(n);
        return binarySearch(newArr, val);
    }
}

let myArrArr = [1,2,3,4,5,6,7,8,9]
let specialArr = [1,2,2,2,2,2,2,4,5,5,5,5,6,6,6];
console.log(binarySearch(specialArr, 0))
console.log(binarySearch(specialArr, 10))
console.log(binarySearch(specialArr, 5))
console.log(binarySearch(specialArr, 8))





// Write a function that, given a sorted array and a value, determines whether the value is found within the array through 
// recursively searching, and returns the index. Binary Search works by checking whether the value given is greater than or 
// less than a midway point, which is why the given array must be sorted. 
// Also, even though there's only an array and value given, you can add additional parameters to your function.
// Return -1 if the number is not in the array