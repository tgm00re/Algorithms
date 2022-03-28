//https://www.youtube.com/watch?v=rw4s4M3hFfs

const blocks = [
    {
        "gym": false,
        "school": true,
        "store": false
    },
    {
        "gym": false,
        "school": false,
        "store": false
    },
    {
        "gym": false,
        "school": true,
        "store": false
    },
    {
        "gym": false,
        "school": true,
        "store": true
    },
]

reqs = ["gym", "school", "store"];


//Returns the index of the block that has the shortest distance 
//to meet all reqs.


const blocksBruteForce = (blocks, reqs) => {
    //Loop through each of the blocks.
    let index = 0;
    let smallestVal = null;
    for(let i = 0; i < blocks.length; i++){
        let count = 0;
        let tempReqs = [...reqs];
        let j = i-1; //backwards
        let k = i+1; //Forwards
        while((j >= 0 || k < blocks.length) && tempReqs.length > 0){
            if(j != 0){
                console.log(tempReqs.indexOf('gym'));

                for(let i = 0; i < tempReqs.length; i++){
                    let val = tempReqs[i];
                    console.log(tempReqs);
                    console.log(val);
                    console.log(tempReqs.indexOf(val));
                    if(blocks[j][val]) tempReqs.splice(tempReqs.indexOf(val));
                }
            }
            if(k < blocks.length){
                console.log('helo');
                for(val in tempReqs){
                    if(blocks[k][val]) tempReqs.splice(tempReqs.indexOf(val) );
                }
            }
            count++;
        }
        console.log("Hola");
        console.log(tempReqs);
        if(smallestVal === null || (smallestVal > count)){
            smallestVal = count;
            index = i;
        }
    }
    return index;
}

console.log(blocksBruteForce(blocks, reqs)); //Should return 3