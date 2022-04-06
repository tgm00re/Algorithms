class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


class singlyLinkedList{
    constructor(){
        this.head = null;
    }

    addToFront(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    addToBack(data){
        if(this.head === null){
            this.addToFront(data);
            return;
        }
        let newNode = new Node(data);
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }
        runner.next = newNode;
    }

    addToBackN(arr){
        let i = 0;
        if(this.head === null){
            this.head = new Node(arr[i]);
            i++;
        }
        let runner = this.head;
        while(runner.next != null){
            runner = runner.next;
        }

        while(i < arr.length){
            let newNode = new Node(arr[i]);
            runner.next = newNode;
            runner = runner.next;
            i++;
        }
    }

    removeFromFront(){
        if(this.head === null){
            return;
        }
        this.head = this.head.next;
    }

    removeFromBack(){
        if(this.head == null){
            return;
        }
        if(this.head.next == null){
            this.head = null;
            return;
        }
        let runner = this.head;
        while(runner.next.next != null){
            runner = runner.next;
        }
        runner.next = null;
    }

    toString(){
        if(this.head === null) return;
        console.log("Running toString: ");
        let myStr = "";
        let runner = this.head;
        while(runner !== null){
            myStr += runner.data + " -> ";
            runner = runner.next;
        }
        console.log(myStr + " null");
    }

    isEmpty(){
        if(this.head === null){
            return true;
        }
        return false;
    }


    removeHead(){
        if(this.head == null){
            return null;
        }
        const dataToReturn = this.head.data;
        if(this.head.next == null){
            this.head = null;
        } else {
            this.head = this.head.next;
        }
        return dataToReturn;
    }

    average(){
        if(this.head === null){
            return null;
        }
        let elements = 0;
        let sum = 0;
        let runner = this.head;
        while(runner != null){
            if(typeof runner.data != 'number'){
                return NaN;
            }
            sum += runner.data;
            elements++;
            runner = runner.next;
        }
        return sum / elements;
    }

    contains(val){
        if(this.head == null){
            return false;
        }
        let runner = this.head;
        while(runner != null){
            if(runner.data == val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    containsRecursive(val, current=this.head){
        if(current == null){
            return false;
        }
        if(current.data == val){
            return true;
        }
        return this.containsRecursive(val, current.next);
    }

    recursiveMax(runner = this.head, maxNode = this.head){
        if(this.head == null){
            return null;
        }
        if(runner == null){
            return maxNode.data;
        }
        if(runner.data > maxNode.data){
            maxNode = runner;
        }
        return this.recursiveMax(runner.next, maxNode);

    }

    recrusiveReverse(currentNode=null, runner=this.head, newHeadReference=this.head){
        if(this.head == null){
            return;
        }
        if(currentNode == this.head){
            this.head.next = null;
            this.head = newHeadReference;
            return;
        } else if(currentNode == null){
            //Set currentNode to the tail
            let tailFinder = this.head;
            while(tailFinder.next != null){
                tailFinder = tailFinder.next;
            }
            //Now we call the function with the currentNode being tail.
            newHeadReference = tailFinder;
            this.recrusiveReverse(tailFinder,this.head, newHeadReference);
        } else if(runner.next == currentNode){
            currentNode.next = runner;
            currentNode = runner;
            this.recrusiveReverse(currentNode,this.head,newHeadReference);
        } else{
            this.recrusiveReverse(currentNode, runner.next,newHeadReference);
        }
    }
}

let mySll = new singlyLinkedList();
mySll.addToFront(32);
mySll.addToFront(64);
mySll.addToFront(10000);
mySll.addToFront(12);
mySll.toString();

mySll.recrusiveReverse();
mySll.toString();
// mySll.addToBackN([111,222,333,444,555]);
// mySll.removeFromFront();
