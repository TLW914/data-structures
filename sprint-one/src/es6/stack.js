class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.capacity = 0
  }

  push(value) {
     this.storage[this.capacity] = value;
     this.capacity++;
  }

  pop () {
  var temp;
	  if (this.capacity > 0) {
	    temp = this.storage[this.capacity - 1];
	    this.capacity--;
	    return temp;
	  } else {
	    return 0;
	  }
 }

 size() {
     return this.capacity;
 }
}





