var Stack = function() {
	this.storage = {};
  	this.capacity = 0
};

Stack.prototype.push = function(value) {
     this.storage[this.capacity] = value;
     this.capacity++;
};

Stack.prototype.pop = function() {
    var temp;
     if (this.capacity > 0) {
       temp = this.storage[this.capacity - 1];
       this.capacity--;
       return temp;
     } else{
       return 0;
     }
   };

   Stack.prototype.size = function() {
     return this.capacity;
   };