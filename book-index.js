// Write a function that given a sorted array of positive page numbers, return a string representing a book index. Combine consecutive pages to create ranges.

// Example: [1,3,4,5,7,8,10,12] --> "1, 3-5, 7-8, 10, 12"

function bookIndex(arr){                    
    arr.sort(function(a,b){     
        return a - b;
    });
    if(arr.length <= 1){
        return arr
    }
    
    let newStr = ""
    for(let i = 0; i < arr.length; i++){
        let start = arr[i]
        while(arr[i] + 1 == arr[i+1] && i < arr.length - 1){     //[1,2,3,4,6]
            i++
        }

        if(start != arr[i]){
            let end = arr[i]
            newStr += start + "-" + end + ", ";
        } else{
            newStr += start + ", "
        }
        
    }
    newStr = newStr.substring(0, newStr.length - 2)
    return newStr
    // return twoD.toString();
}
console.log(bookIndex([1,2,3,4,6,9, 10]));
