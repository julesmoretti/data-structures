var makeLinkedList = function(){
  var list = {};
  list.head = null; // left hand side
  list.tail = null; // right hand side

  // .addToTail() method, takes a value and adds it to the end of the list
  list.addToTail = function(value){
    if (list.tail === null) {
      list.tail = makeNode(value);
      list.head = list.tail;
    } else {
      list.tail.next = makeNode(value);
      list.tail = list.tail.next;
    }
  };

  // .removeHead() method, removes the first node from the list and returns its value
  list.removeHead = function(){
    if (list.head !== null) {
      if (list.head === list.tail) {
        var result = list.head.value;
        list.tail = null;
        list.head = null;
        return result;
      }
      var result = list.head.value;
      list.head = list.head.next;
      return result;
    }
    return undefined;
  };

  // .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
  list.contains = function(target, node){
    if (list.head === null) {
      return false;
    }
    var nextNode = function(aNode) {
      if (aNode.value === target) {
        return true;
      } else if (aNode.next === null) {
        return false;
      }
      return nextNode(aNode.next);
    }
    return nextNode(list.head);
  };

  return list;
};


var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
