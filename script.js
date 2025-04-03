class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  root;

  buildTree(array) {
    array = this.sortArray(array);
    this.root = this.sortedArrayToBst(array, 0, array.length - 1);
  }

  sortArray(array) {
    let sortedArray = array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++)
      if (array[i] === array[i + 1]) {
        array.splice(i, 1);
      }

    return sortedArray;
  }

  sortedArrayToBst(arr, start, end) {
    if (start > end) {
      return null;
    }

    let mid = start + Math.floor((end - start) / 2);

    let root = new Node(arr[mid]);
    root.left = this.sortedArrayToBst(arr, start, mid - 1);
    root.right = this.sortedArrayToBst(arr, mid + 1, end);

    return root;
  }

  insert(value) {
    function insertToTree(root, key) {
      if (root === null) {
        return new Node(key);
      }

      if (root.data === key) {
        return root;
      }

      if (key < root.data) {
        root.left = insertToTree(root.left, key);
      } else if (key > root.data) {
        root.right = insertToTree(root.right, key);
      }

      return root;
    }

    insertToTree(this.root, value);
  }

  delete(value) {
    function getSuccessor(curr) {
        curr = curr.right;
        while (curr !== null && curr.left !== null) {
            curr = curr.left;
        }
        return curr;
    }

    function delNode(root, x) {
        if (root === null) {
            return root;
        }
    
        if (root.data > x) {
            root.left = delNode(root.left, x);
        } else if (root.data < x) {
            root.right = delNode(root.right, x);
        } else {
            if (root.left === null) 
                return root.right;
            if (root.right === null) 
                return root.left;

            let succ = getSuccessor(root);
            root.data = succ.data;
            root.right = delNode(root.right, succ.data);
        }
        return root;
    }

    delNode(this.root, value);
  }
}

const newTree = new Tree();

newTree.buildTree([40, 30, 20, 10]);
newTree.insert(25);
newTree.insert(27);
newTree.delete(30);

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  prettyPrint(newTree.root);

// console.log(newTree.root);