var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null){
      list.head = node;
      list.tail = node;
    }
    list.tail.next = node;
    list.tail = node;
  };

  list.removeHead = function() {
      var temp = list.head.value;
      list.head = list.head.next;
      return temp;
  };

  list.contains = function(target) {
    if (list.head.value === target){
       return true;
    } else if (list.head.next.value){
       return true;
    }
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
