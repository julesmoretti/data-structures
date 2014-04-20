// A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front (FIFO: first in, first out).
var makeQueue = function(){
  var instance = {};
  var back = 0; //removed values (largest value)
  var front = 0; //added values (smallest value)

  // Use an object with numeric keys to store values
  var storage = {};

  // Add a string to the back of the queue
  instance.enqueue = function(value){
    storage[back] = value;
    back++;
  };

  // Remove and return the string at the front of the queue
  instance.dequeue = function(){
    if (back !== front) {
      var result = storage[front]; 
      delete storage[front];
      front++;
      return result;
    }
  };

  // Return the number of items in the queue
  instance.size = function(){
    return back - front;
  };

  return instance;
};