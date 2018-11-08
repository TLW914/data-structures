var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}
	extend(someInstance, stackMethods);
	storage = {};
	size = 0;
  	front = 0;
  	back = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  	return someInstance;
};

var stackMethods = {};

   stackMethods.push = function(value) {
     storage[size] = value;
     size++;
   };

   stackMethods.pop = function() {
    var temp;
     if (size > 0) {
       temp = storage[size - 1];
       size--;
       return temp;
     } else{
      return 0;
     }
   };

   stackMethods.size = function() {
     return size;
   };