var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
// Constant time complexity
    var node = Node(value);
    if (list.head === null){
      list.head = node;
      list.tail = node;
    }
    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function() {
// Constant time complexity
      var temp = list.head.value;
      list.head = list.head.next;
      return temp;
  };

  list.contains = function(target) {
// Linear time complexity
    var temp = list.head;
    while (temp !== null){
      if (temp.value === target){
         return true;
      } else {
          temp = temp.next;
        }
    }
   return false; 
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
