class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}



class SLList {
    constructor() {
        this.head = null
    }

    addToFront(value) {
        // step #1 Make a new node
        var newNode = new Node(value);

        // Check to see if there is a head
        if (this.head == null) {
            this.head = newNode;

            return this;
        }
        // if there is a head
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    addToBack(value) {
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

    removeFromFront() {
        if (this.head == null) {
        } else {
            this.head = this.head.next

            return this
        }
        return;
    }

    removeFromBack() {
        if (this.head !== null) {
            var temp = this.head
            while (temp.next.next != null) {
                // console.log("next ", temp.next)
                temp = temp.next
            }
            temp.next = null
        }
        return this
    }

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

    minToFront(){
        if(this.head == null){
            return;
        }
        
        let currentMinPrev = this.head;
        let currentPrev = this.head;
        let currentMin = this.head;
        let runner = this.head;
        while(runner.next != null){
            if(runner.value < currentMin.value){
                currentMin = runner;
                currentMinPrev = currentPrev;
            }

            if(runner != this.head){
                currentPrev = currentPrev.next;
            }
            runner = runner.next;
        }

        //Testing the last node in the list
        if(runner.value < currentMin.value){
            currentMin = runner;
            currentMinPrev = currentPrev;
        }
    
        //min value was already the head
        if(currentMin == this.head){
            console.log(currentMin.value);
            return;
        } 
        //min value was not already at the head:

        //Set the node prior to the minmum node to minimumNode.next
        currentMinPrev.next = currentMin.next;
        
        //minimumNode.next = this.head
        currentMin.next = this.head;
        //this.head = minimumNode
        this.head = currentMin;
    }

    maxToBack(self){
        if(this.head == null){
            return;
        }
        
        let currentMaxPrev = this.head;
        let currentPrev = this.head;
        let currentMax = this.head;
        let runner = this.head;
        while(runner.next != null){
            if(runner.value > currentMax.value){
                currentMax = runner;
                currentMaxPrev = currentPrev;
            }

            if(runner != this.head){
                currentPrev = currentPrev.next;
            }
            runner = runner.next;
        }

        //Testing the last node in the list
        if(runner.value > currentMax.value){
            console.log(runner.value + " > " + currentMax.value);
            currentMax = runner;
            currentMaxPrev = currentPrev;
        }
    
        //Max was the head...?
        if(currentMax == this.head){
            this.addToBack(this.head.value);
            this.head = this.head.next;
            return;
        } 

        //Set the node prior to the max node to maxNode.next
        currentMaxPrev.next = currentMax.next;
        this.addToBack(currentMax.value);
    }

    appendValue(val, i){
        let newNode = new Node(val)


        let count = 0;
        let runner = this.head
        while(runner != null){
            if(count == i){
                newNode.next = runner.next
                runner.next = newNode
                return this;
            }
            count++;
            runner = runner.next;
        }
        return false;
    }

    prependValue(val, i){
        let newNode =  new Node(val)

        if(this.head == null){
            return;
        }
        if(i == 0){
            this.addToFront(val);
        }

        let count = 0;
        let runner = this.head;
        while(runner != null){
            if(count == i-1){
                newNode.next = runner.next;
                runner.next = newNode
                return this;
            }
            count++;
            runner = runner.next
        }
        return false;
    }

    // print the singly linked list
    printValues() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if (this.head == null) {
            console.log("There's nothing in the list! Dummy!")
                // return 'this' to end function and allow chaining of methods
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;

        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing


        while (runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
            // return 'this' to end function and allow chaining of methods
        return this
    }
}

const sll = new SLList();
sll.addToFront(1)    
sll.addToFront(5)
sll.addToFront(6);
sll.addToBack(9);    

// sll.minToFront();
sll.maxToBack();
sll.appendValue(20, 4);
sll.prependValue(30, 0)

// sll.printValues()
// sll.removeFromBack()
// sll.printValues()
// sll.removeFromFront()

// console.log(sll.contains(5));

sll.printValues()