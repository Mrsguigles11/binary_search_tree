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
      return;
    }

    let mid = start + Math.floor((end - start) / 2);

    let root = new Node(arr[mid]);
    root.left = this.sortedArrayToBst(arr, start, mid - 1);
    root.right = this.sortedArrayToBst(arr, mid + 1, end);

    return root;
  }

  insert(root, key) {
    if (root === undefined) {
        return new Node(key);
    }

    if (root.data === key) {
        return root;
    }

    if (key < root.data) {
        root.left = this.insert(root.left, key);
    }
    else if (key > root.data) {
        root.right = this.insert(root.right, key);
    }

    return root;
  }
}

const newTree = new Tree();

newTree.buildTree([40, 30, 20, 10]);
newTree.insert(newTree.root, 25)

console.log(newTree.root);
