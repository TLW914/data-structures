var extend = function(obj1, obj2) {
     for(var key in obj2) {
         obj1[key] = obj2[key];
     }
};


var Queue = function() {
	var someInstance = {}
	extend(someInstance, queueMethods);
	storage = {};
	size = 0;
  	front = 0;
  	back = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	return someInstance;
};

queueMethods = {};

queueMethods.enqueue = function(value) {
  storage[back] = value;
  back++;
}

queueMethods.dequeue = function() {
  if (back > front) {
    var temp = storage[front];
    delete storage[front];
    front++;
    return temp;
  }
}

queueMethods.size = function() {
  size = back - front;
  return size;
};



