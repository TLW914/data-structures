var Stack = function() {

  var someInstance = {};
  var storage = {};
  var size = 0;

   someInstance.push = function(value) {
     storage[size] = value;
     size++;
   };

   someInstance.pop = function() {
    var temp;
     if (size > 0) {
       temp = storage[size - 1];
       size--;
       return temp;
     } else{
      return 0;
     }
   };

   someInstance.size = function() {
     return size;
   };
   return someInstance;
};