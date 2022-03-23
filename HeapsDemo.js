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

console.log(myHeap.min());

