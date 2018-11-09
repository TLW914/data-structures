var extend = function(obj1, obj2) {
     for(var key in obj2) {
         obj1[key] = obj2[key];
     }
};

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target){
    return true;
  }
  var recurseTree = function(array){
    for (var i=0; i < array.length; i++){
      if (array[i].value === target) {
        result = true;
      }
      if(array[i].children) {
        recurseTree(array[i].children)
      }
    }
  }  
  recurseTree(this.children);
  return result;
}

///OTHER RECURSION - WORKING:
  // var recurseTree = function(tree) {
  //   if(tree.value === target) {
  //     result = true;
  //   }
  //   for(var i = 0; i < tree.children.length; i++) {
  //     recurseTree(tree.children[i]);
  //   }
  // }
  

/*
 * Complexity: What is the time complexity of the above functions?
 */
