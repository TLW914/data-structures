

// Instantiate a new graph
var Graph = function() {
   this.nodes = [];
   this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for(var i = 0; i < this.nodes.length; i++) {
    if(this.nodes.includes(node)) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var i =0; i < this.nodes.length; i++) {
    if(this.nodes.includes(node)) {
      this.nodes.splice(i, 1);
    }
  }

  for (var key in this.edges){
    if (key === String(node)){
      delete key;
    }
    for(var i = 0; i < this.edges[key].length;i++) {
      if(this.edges[key][i] === node) {
        this.edges[key].splice(i, 1)
      }
    }
  }
  
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var nodeEdges = this.edges;
  console.log(nodeEdges);
  for (var key in nodeEdges){
    if (key === String(fromNode)){
      console.log('enter');
      for (var i=0; i<nodeEdges[fromNode].length; i++){
        if (nodeEdges[fromNode][i] === toNode){
          console.log(nodeEdges[fromNode][i]);
          return true;
        }
      }
      return false;
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if(this.edges[fromNode]){
    this.edges[fromNode].push(toNode);
  } else {
    this.edges[fromNode] = [toNode];  
  }
  if(this.edges[toNode]){
    this.edges[toNode].push(fromNode);
  } else {
    this.edges[toNode] = [fromNode];
  }
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var nodeEdges = this.edges;
  for (var key in nodeEdges){
    if (key === String(fromNode)){
      for (var i=0; i<nodeEdges[fromNode].length; i++){
        if (nodeEdges[fromNode][i] === toNode){
            nodeEdges[fromNode].splice(i,1);
        }
      }
    }
  }
  for (var key in nodeEdges){
    if (key === String(toNode)){
      for (var i=0; i<nodeEdges[toNode].length; i++){
        if (nodeEdges[toNode][i] === fromNode){
            nodeEdges[toNode].splice(i,1);
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i])
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


