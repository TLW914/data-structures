

var HashTable = function() {
  // var newHash = Object.create(HashTable.prototype)
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //this = newHash
  //return newHash;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit); // sets index to random value via helper function this.limit = the limit of our newHash table
  console.log(k)
  this._storage.set(index, v)
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


