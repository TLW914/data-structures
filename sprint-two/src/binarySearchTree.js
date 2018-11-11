var extend = function(obj1, obj2) {
     for(var key in obj2) {
         obj1[key] = obj2[key];
     }
};

var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.right = null;
  newTree.left = null;
  extend(newTree, binarySearchTreeMethods)
  return newTree;
  
};

var binarySearchTreeMethods = {};

  binarySearchTreeMethods.insert = function(child){
    var newChild = BinarySearchTree(child);
    if(!this.left && newChild.value < this.value){
      this.left = newChild;
    } else if (newChild.value < this.value){
      this.left.insert(child)
    } else if (!this.right && newChild.value > this.value){
      this.right = newChild;
    } else if (newChild.value > this.value){
      this.right.insert(child)
    } 
  };

  binarySearchTreeMethods.contains = function(target){
    var result = false;

    var recurseTree = function(obj) {
      if(obj.value === target) {
        result = true;
      } else if (obj.left && obj.value > target) {
        recurseTree(obj.left)
      } else if (obj.right && obj.value < target) {
        recurseTree(obj.right)
      }
    }
    recurseTree(this)
    return result;
  };

  binarySearchTreeMethods.depthFirstLog = function(callback){

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
