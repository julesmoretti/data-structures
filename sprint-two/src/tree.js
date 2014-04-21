
var makeTree = function(value){
  var newTree = {};
	extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];  // .children property, an array containing a number of subtrees
  return newTree;
};

var treeMethods = {};  // A tree class, in functional with shared methods style, with the following properties:

// .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value){
	var newChild = makeTree(value);
	this.children.push(newChild);
};

// A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target){




	var checkChild = function(eachTree) {
		// check if tree value is same as target - if so return true and end. 
		var anymoreChildren = false;
		if (eachTree.value === target) {
			anymoreChildren = true;
			return anymoreChildren;
		// if not check if children array has anything inside if there is recurse for each index.
		} else if (eachTree.children) {
			for (var i = 0; i < eachTree.children.length; i++ ) {
				if (!anymoreChildren) {
					anymoreChildren = checkChild(eachTree.children[i]);
				}
			}
		}
		return anymoreChildren;
	};
	// run checkchild on this.
	return checkChild(this);
};


// var julesTree = makeTree(5);
// julesTree.addChild(7);

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};
