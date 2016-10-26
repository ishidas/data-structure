'use strict';

//link node has next property, but start
function Node(element){
  this.element = element;
  this.next = null;
}

function LinkList (){
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  // this.peek = peek;??
  this.findPrevious = findPrevious;
}

function find(item){
  let current = this.head;
  while(current.element != item ){
    current = current.next;
  }
  return current;
}

function insert(ele, item){
  let newEl = new Node(ele);
  let current = this.find(item);
  newEl.next = current.next;
  current.next = newEl;
}


function findPrevious (item){
  let current = this.head;
  while (!(current.next == null) && !(current.next.element == item)) {
    current = current.next;
  }
  return current;
}

function remove (item){
  let prev = this.findPrevious(item);
  if(!(prev.next == null)){
    prev.next = prev.next.next;
  }
  return true;
}

// function peek (item){
//   return this.find(item);
// }

let N1 = new LinkList();
N1.insert(3, 'head');
N1.insert(99, 3);
N1.insert(50, 99);
N1.insert(21, 50);
N1.insert(0, 21);

// console.log('find', N1.find(50));
console.log('find prev', N1.findPrevious(50));
console.log('removed', N1.remove(99));
// console.dir(N1.peek(3));
