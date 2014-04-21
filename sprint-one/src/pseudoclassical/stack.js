var Stack = function() {
  // vor imstance = Object.create(stackMethods);

  this._storage = {};
  this._size = 0;

 // returwn instance;
};

// var stackMethods = {};

// stackMethods.push = ...
Stack.prototype.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

// stackMethods.pop = ...
Stack.prototype.pop = function(){
  this._size && this._size--;
  var result = this._storage[this._size];
  delete this._storage[this._size];
  return result;
};

// stackMethods.size = ...
Stack.prototype.size = function(){
  return this._size;
};