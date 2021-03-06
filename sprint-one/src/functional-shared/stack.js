var extend = function(obj1, obj2) {
     for(var key in obj2) {
         obj1[key] = obj2[key];
     }
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	var someInstance = {}
	extend(someInstance, stackMethods);
	someInstance.storage = {};
  	someInstance.capacity = 0
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	return someInstance;
};

var stackMethods = {
	push: function(value) {
     this.storage[this.capacity] = value;
     this.capacity++;
   },

   pop: function() {
    var temp;
     if (this.capacity > 0) {
       temp = this.storage[this.capacity - 1];
       this.capacity--;
       return temp;
     } else{
       return 0;
     }
   },

   size: function() {
     return this.capacity;
   }
};

