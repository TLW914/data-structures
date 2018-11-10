

var HashTable = function() {
  // var hashTable = Object.create(HashTable.prototype)
  this._limit = 8;
  this._storage = LimitedArray(this._limit); //this = hashTable
  //return hashTable;
};

HashTable.prototype.insert = function(k, v) {
//EXAMPLE - hashTable.insert('Steven'(k), 'Seagal'(v))
  var index = getIndexBelowMaxForKey(k, this._limit); // gets/sets index to random value via helper function/hasher function. this.limit = the limit of our hashTable table
  //this._storage.set(index, v) // hashTable._storage.set(our random index that was set above by hasher function, inserts value 'Seagal' via our set helper function)
  var bucket;
  var tuple;
  if(!this._storage.get(index)) {
    bucket = [];
    tuple = [k,v]
    bucket.push(tuple)
    v = bucket;
    this._storage.set(index, v)
  } else {
    bucket = this._storage.get(index);
    for (var i=0; i<bucket.length; i++){
      if (bucket[i][0] === k){
        bucket[i][1] = v;
      return;
      }
    }
    tuple = [k,v];
    bucket.push(tuple)
    v = bucket
    console.log('bucket before push 2nd pair', bucket)
    this._storage.set(index, v)
    console.log('bucket after push 2nd pair', bucket)
  }
  
};



HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  console.log(bucket)
  for(var i = 0; i < bucket.length;i++) {
    if(bucket[i][0] === k) {

      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); 
  var removeFromStorage = function (value, i, storage) { 
    if(i === index) {
      console.log(bucket);
      for (var i=0; i<bucket.length; i++){
        if (bucket[i][0] === k){
            bucket.splice(i,1);
        }
      }
    }
  }
  this._storage.each(removeFromStorage);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


