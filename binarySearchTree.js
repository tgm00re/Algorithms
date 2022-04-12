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
oneNodeTree.root = new Node(10);
oneNodeTree.addValue(24);
oneNodeTree.addValue(5);
oneNodeTree.addValue(13);
oneNodeTree.addValue(12);
console.log(oneNodeTree.range())
// console.log(oneNodeTree.maxRecursive());
// console.log(oneNodeTree.minRecursive());
// console.log(oneNodeTree.min());
// console.log(oneNodeTree.max());














