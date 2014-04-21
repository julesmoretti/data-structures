var makeQueue = function(){
  // var instance = {};
  var instance = Object.create(queueMethods);

  // _.extend(instance, queueMethods);

  instance._back = 0; //removed values (largest value)
  instance._front = 0; //added values (smallest value)

  instance._storage = {};

  return instance;
};

var queueMethods = {};

// Add a string to the this._back of the queue
queueMethods.enqueue = function(value){
  this._storage[this._back] = value;
  this._back++;
};

// Remove and return the string at the this._front of the queue
queueMethods.dequeue = function(){
  if (this._back !== this._front) {
    var result = this._storage[this._front];
    delete this._storage[this._front];
    this._front++;
    return result;
  }
};

// Return the number of items in the queue
queueMethods.size = function(){
  return this._back - this._front;
};