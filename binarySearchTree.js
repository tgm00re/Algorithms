class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        if(this.root == null){
            return true;
        }
        return false;
    }

    addValue(data){
        const newNode = new Node(data);
        if(this.isEmpty()){
            this.root = newNode;
            return;
        }
        let runner = this.root;
        while(true){
            if(data < runner.data){ //Needs to go to the left side
                if(runner.left == null){
                    runner.left = newNode;
                    return;
                } else {
                    runner = runner.left;
                }
            } else if(data > runner.data){ //Needs to go to the right side.
                if(runner.right == null){
                    runner.right = newNode;
                    return;
                } else {
                    runner = runner.right;
                }
            } else { //The values were equal, so we just add 1 to the count.
                runner.count += 1;
                return;
            }
        }
    }

    max(node = this.root){
        if(node == null){
            return;
        }
        let runner = this.root;
        while(runner.left != null){
            runner = runner.left;
        }
        return runner.data;
    }   

    min(node = this.root){
        if(node == null){
            return;
        }
        let runner = this.root;
        while(runner.right != null){
            runner = runner.right;
        }
        return runner.data;
    }

    maxRecursive(node = this.root){
        return node == null ? null : node.right == null ? node.data : this.maxRecursive(node.right);
    }

    minRecursive(node = this.root){
        return node == null ? null : node.left == null ? node.data : this.minRecursive(node.left);
    }

    contains(searchVal){
        if(this.root == null){
            return false;
        }
        let runner = this.root;
        while(runner != null){
            if(searchVal == runner.data){
                return true;
            }
            if(searchVal > runner.data){
                runner = runner.right;
            } else {
                runner = runner.left;
            }
        }
        return false;
    }

    containsRecursive(searchVal, startNode = this.root){
        if(startNode == null){
            return false;
        }
        if(searchVal == startNode.data){
            return true;
        }
        if(searchVal > startNode.data){
            return this.containsRecursive(searchVal, startNode.right)
        }
        if(searchVal < startNode.data){
            return this.containsRecursive(searchVal, startNode.left);
        }
    }

    range(startNode = this.root){
        if(startNode == null){
            return null;
        }
        let leftRunner = startNode;
        let rightRunner = startNode;
        while(leftRunner.left != null){
            leftRunner = leftRunner.left
        }
        while(rightRunner.right != null){
            rightRunner = rightRunner.right;
        }

        return rightRunner.data - leftRunner.data;
    }

    toArrInOrder(node = this.root, vals = []){
        if(node == null){
            return;
        }

        this.toArrInOrder(node.left, vals);
        vals.push(node.data);
        this.toArrInOrder(node.right, vals);
        return vals;
    }

    toArrPreOrder(node = this.root, vals = []){
        if(node == null){
            return;
        }

        vals.push(node.data);
        this.toArrPreOrder(node.left, vals);
        this.toArrPreOrder(node.right, vals);
        return vals;
    }

    toArrPostOrder(node = this.root, vals = []){
        if(node == null){
            return;
        }

        this.toArrPostOrder(node.left, vals);
        this.toArrPostOrder(node.right, vals);
        vals.push(node.data);
        return vals;
    }

    toArrLevelOrder(currentNode = this.root, vals=[]){
        if(currentNode == null){
            return;
        }
        if(currentNode == this.root ){
            vals.push(currentNode.data)
        }
        if(currentNode.left != null){
            vals.push(currentNode.left.data);
        }
        if(currentNode.right != null){
            vals.push(currentNode.right.data);
        }
        this.toArrLevelOrder(currentNode.left, vals);
        this.toArrLevelOrder(currentNode.right, vals);
        return vals;
        
    }

    size(currentNode = this.root, size=0){ //complete
        if(currentNode == null){
            return 0;
        }
        return this.size(currentNode.left) 
        + this.size(currentNode.right) + 1;
    }

    height(currentNode = this.root){ //complete
        if(currentNode == null){
            return 0;
        }
        const leftHeight = this.height(currentNode.left) + 1;
        const rightHeight = this.height(currentNode.right) + 1;
        if(leftHeight > rightHeight){
            return leftHeight;
        }
        return rightHeight;
    }

    isFull(currentNode = this.root){ // complete
        if(currentNode == null){
            return true;
        }
        if(currentNode.left == null && currentNode.right != null){
            // console.log("left node null, right node not");
            return false;
        }
        if(currentNode.right == null && currentNode.left != null){
            // console.log("right node null, left node not");
            return false;
        }
        let leftIsTrue = this.isFull(currentNode.left);
        let rightIsTrue = this.isFull(currentNode.right);
        if(!leftIsTrue || !rightIsTrue){
            return false;
        }
        return true;
    }
    

    


}



class Node{
    constructor(data){
        this.data = data;
        this.left = null; 
        this.right = null;
        this.count = 1;
    }
}


const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
    oneNodeTree.addValue(25)
    oneNodeTree.addValue(15)
    oneNodeTree.addValue(10)
    oneNodeTree.addValue(22)
    oneNodeTree.addValue(4)
    oneNodeTree.addValue(12)
    oneNodeTree.addValue(18)
    oneNodeTree.addValue(50)
    oneNodeTree.addValue(35);
    oneNodeTree.addValue(55);
    oneNodeTree.addValue(35)
    oneNodeTree.addValue(70)
    oneNodeTree.addValue(31)
    oneNodeTree.addValue(44)
    oneNodeTree.addValue(66)
    oneNodeTree.addValue(90);
    oneNodeTree.addValue(5);
    oneNodeTree.addValue(10);
    oneNodeTree.addValue(1);
    oneNodeTree.addValue(-3);
console.log(oneNodeTree.height());
// console.log(oneNodeTree.maxRecursive());
// console.log(oneNodeTree.minRecursive());
// console.log(oneNodeTree.min());
// console.log(oneNodeTree.max());














