'use strict';
//**** code referenced from http://www.java2s.com/Tutorials/Javascript/Javascript_Data_Structure/0420__Javascript_Binary_Tree.htm
//*********

function Node (data, left, right){
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}

function show (){
  return this.data;
}

function BST (){
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
}

function insert (data){
  let n = new Node(data, null, null);
  if(this.root == null){
    this.root = n;
    console.log('this.root', this.root);
  } else {
    let current = this.root;
    let parent;
    while (true){
      parent = current;
      if(data < current.data){
        current = current.left;
        if(current == null){
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if(current == null){
          parent.right = n;
          break;
        }
      }
    }
  }
}

function inOrder (node){
  // console.log('node?', node);
  if(!(node == null)){
    this.inOrder(node.left);
    console.log(node.show() + ' ');
    this.inOrder(node.right);
  }
}

function preOrder (node){
  if(!(node == null)){
    console.log(node.show() + ' ');
    preOrder(node.left);
    preOrder(node.right);
  }
}

function postOrder (node){
  if(!(node == null)){
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show() + ' ');
  }
}

let N1 = new BST();
N1.insert(5);
N1.insert(8);
N1.insert(7);
N1.insert(10);
N1.insert(88);
N1.insert(20);
N1.insert(21);
N1.insert(1);
console.log('tree!!!', N1.root);
console.log('Inorder Traversal: ');
N1.inOrder(N1.root);
console.log('preorder Traversal: ');
N1.preOrder(N1.root);
console.log('postorder Traversal: ');
N1.postOrder(N1.root);
