var Queue = function() {
  // vor imstance = Object.create(queueMethods);

  this._back = 0; //removed values (largest value)
  this._front = 0; //added values (smallest value)

  this._storage = {};

  // returm imstance;
};

// var queueMethods = {};

// Add a string to the this._back of the queue
Queue.prototype.enqueue = function(value){
  this._storage[this._back] = value;
  this._back++;
};

// Remove and return the string at the this._front of the queue
Queue.prototype.dequeue = function(){
  if (this._back !== this._front) {
    var result = this._storage[this._front];
    delete this._storage[this._front];
    this._front++;
    return result;
  }
};

// Return the number of items in the queue
Queue.prototype.size = function(){
  return this._back - this._front;
};