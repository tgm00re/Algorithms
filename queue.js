class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

// a queue operates on the principal of "First In, First Out" like waiting in line for something
class SLQueue{
    constructor() {
        this.head = null
        this.tail = null
    }

    // add a node with the given value to the queue
    push(value) {
            var node = new Node(value)
            if (this.head == null) {
                this.head = node
            } else {
                var temp = this.head
                while (temp.next != null) {
                    temp = temp.next
                }
                temp.next = node
            }
            return this
    }

    // remove and return the front value from the queue
    pop() {
        let value = null;
        if (this.head != null) {
            value = this.head.value
            this.head = this.head.next
        }
        return value;
    }

    //return true/false based on whether you find the given value in a queue
    contains(value){
        if(this.head == null){
            return false;
        }
        let runner = this.head
        while(runner.next != null){
            if(runner.value == value){
                return true;
            }
            runner = runner.next;
        }
        if(runner.value == value){
            return true;
        }
        return false;
    }

    // remove the minimum value in the queue (remember your edgecases and pointers!)
    removeMin() {
        if(this.head == null){
            return;
        }

        if(this.head.next == null){
            this.head = null;
            return;
        }


        let minPrev = this.head;
        let runnerPrev = this.head;
        let min = this.head;
        let runner = this.head

        while(runner != null){
            if(runner.value < min.value){
                min = runner;
                minPrev = runnerPrev;
            }
            if(runner != this.head){
                runnerPrev = runnerPrev.next;
            }
            runner = runner.next;
        }
        minPrev.next = min.next;
    }

    displayQueue(){
        if (!this.head){
            console.log("This queue is empty.");
        }
        else {
            var runner = this.head;
            var str = "";
            while(runner){
                str += runner.value + " -> ";
                runner = runner.next;
            }
            str += "null";
            console.log(str);
        }
    }

}


const q = new SLQueue();
q.push(1)
q.push(2)
q.push(3)
q.push(4)
q.push(5)
q.push(6)
q.push(7)
q.push(8)


q.displayQueue()