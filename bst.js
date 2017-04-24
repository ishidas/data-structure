function BST (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (val) {
  if(val <= this.value) {
    if(!this.left) this.left = new BST(val);
    else this.left.insert(val);
  } else {
    if(!this.right) this.right = new BST(val);
    else this.right.insert(val);
  }
}

BST.prototype.contains = function (val) {
  if(this.value === val) {
    return this.value;
  } else if (val < this.value){
      if(!this.left) return false;
      else return this.left.contains(val);
  } else if (val > this.value ){
      if(!this.right) return false;
      else return this.right.contains(val);
  }
}

BST.prototype.depthFirstTravresal = function (val) {
  if(val === null) {
    return;
  } else {
    if(this.left !== null) depthFirstTravresal(this.left.value);
    if(this.right !== null) depthFirstTravresal(this.right);
  }






}
var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);


console.log(bst.contains(5));
