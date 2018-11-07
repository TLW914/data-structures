var Queue = function() {
  var someInstance = {};
 // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var front = 0;
  var back = 0;

someInstance.enqueue = function(value) {
  storage[back] = value;
  back++;
}

someInstance.dequeue = function() {
  if (back > front) {
    var temp = storage[front];
    delete storage[front];
    front++;
    return temp;
  }
}

someInstance.size = function() {
  size = back - front;
  return size;
};


  return someInstance;
};
