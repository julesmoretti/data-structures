// A set class, in prototypal style, with the following properties:
var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// An .add() method, takes any string and adds it to the set
setPrototype.add = function(item){
	this._storage[item] = item;
};

// A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function(item){
	if (this._storage[item] === item) {
		return true;
	}
	return false;
};

// A .remove() method, takes any string and removes it from the set, if present
setPrototype.remove = function(item){
	if (this._storage[item] === item) {
		delete this._storage[item];
	}
};

// Note: Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.
// Note: Until the extra credit section, your sets should handle only string values.
// Note: This is a rather simple data structure. Take a look at the Wikipedia entry. Which native Javascript type fits the requirements best?