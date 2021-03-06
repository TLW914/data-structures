var Queue = function() {
	var someInstance = Object.create(queueMethods);
	someInstance.storage = {};
  	someInstance.front = 0;
  	someInstance.back = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	return someInstance;
};

queueMethods = {
	enqueue : function(value) {
  	this.storage[this.back] = value;
  	this.back++;
	},

	dequeue: function() {
  	if (this.back > this.front) {
    	var temp = this.storage[this.front];
    	delete this.storage[this.front];
    	this.front++;
    	return temp;
  		}
	},
	size: function() {
  	return this.back - this.front;
	}
};



