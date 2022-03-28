//Min Heap:
//Very quickly and very lightly know the smallest value, top of the tree
//Max Heap:
//Very quickly and very lightly know the largest value, top of the tree
//Both
//Uses a tree data structure
//Will be a tree data stucture, stored in an array
//Each node can have UP TO 2 child elements
// --- finding children ---
//Take index of any node, multiply it by 2 for the left child, multiply it by 2 and add 1 to get the right child.
//--- finding parent ---
//Math.floor(floor(i/2)) = parent 


class minHeap{
    constructor(){
        this.heap = [null]; //We won't be using the first value. We don't want index 0 because of the math above.
    }

    add(value){ //
        this.heap.push(value);
        this.shiftUp();
    }

    shiftUp(){ //Shift a value up until the parent is larger.
        let index = this.heap.length-1;
        while(this.heap[index] < this.heap[Math.floor(index/2)] && index != 1){

            let parentIndex = Math.floor(index/2);
            const parentVal = this.heap[parentIndex];
            
            //Swap parent and heap[index]
            const temp = parentVal;
            this.heap[parentIndex] = this.heap[index];
            this.heap[index] = temp;
            //Swap the index to be the parent.
            index = parentIndex;
        }
    }

    min(){
        return this.heap.length < 2 ? null : this.heap[1];
    }

    //Take the top value and shift it down until its in its proper place. (Both children are larger than it)
    shiftDown(){
        let index = 1;
        let leftIndex = index *2;
        while(leftIndex < this.heap.length){
            //Store the right index because we might need it..
            let rightIndex = leftIndex+1;
            //We need to figure out which is the smalles.t
            let indexOfSmallest = leftIndex;
            //Should I replace that with the right index?
            if(rightIndex < this.heap.length && this.heap[indexOfSmallest] < this.heap[rightIndex]){
                indexOfSmallest = rightIndex;
            }
            //We need to see if a swap needs to happen - is the parent value larger than the smaller child.
            if(this.heap[index] <= this.heap[indexOfSmallest]){
                //This means that the parent index is in the right place and we are DONE!
                console.log("The value to shift down has found its home, breaking out of the function!");
                break;
            } 
            //The parent value was larger and needs to be swaped with a smaller value!
            const temp = this.heap[index]; 
            this.heap[index] = this.heap[indexOfSmallest];
            this.indexOfSmallest = temp;

            //Change index to match the indice it swapped with.
            index = indexOfSmallest;
            leftIndex = index * 2;

        }
    }
    




    //Always remove top value
    remove(){
        //Scenario 1: Array is empty (length < 2)
        if(this.heap.length < 2) return null;

        //Scenario 2: Only 1 value in the heap
        const min = this.heap[1];
        if(this.heap.length === 2){
            this.heap.pop();
            return min;
        } 

        //Scenario 3: There are values left after the min is removed.

        //Moves the last value to the top of the heap..
        this.heap[1] = this.heap.pop(); 

        //Now we shift the this.heap[1] element down until it is in its proper spot
        this.shiftDown();

        //At the end we return the value we got.
        return min;
    }
}


const myHeap = new minHeap();

myHeap.add(0);
myHeap.add(-.2);
myHeap.add(.3);
myHeap.add(10000);
myHeap.add(-30);
myHeap.add(2000);
myHeap.add(-5);
myHeap.add(15);
myHeap.remove();

console.log(myHeap.min());

