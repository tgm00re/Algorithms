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



}

let mySll = new singlyLinkedList();
mySll.addToFront(32);
mySll.addToFront(64);
mySll.addToFront(128);
mySll.addToFront(256);
mySll.addToBack(512);
mySll.insertAtFront(100);
console.log(mySll.average());
mySll.toString();
// mySll.addToBackN([111,222,333,444,555]);
// mySll.removeFromFront();
