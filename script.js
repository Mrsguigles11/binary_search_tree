
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
        return this.sortedArrayToBst(array, 0, array.length - 1); 
    }

    sortArray(array) {
        let sortedArray = array.sort((a, b) => a - b);

        for (let i = 0; i < array.length; i++)
            if(array[i] === array[i + 1]) {
                array.splice(i, 1);
            }

        return sortedArray;
    }

    sortedArrayToBst(arr, start, end){
        if (start > end) {
            return
        }

        let mid = start + Math.floor((end - start) / 2);

        let root = new Node(arr[mid]);
        root.left = this.sortedArrayToBst(arr, start, mid -1);
        root.right = this.sortedArrayToBst(arr, mid + 1, end);

        return root

    }

}

const newTree = new Tree();

console.log(newTree.buildTree([4, 3, 2, 1, 4]));
