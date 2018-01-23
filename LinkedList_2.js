'use strict';
function Node (data) {
  this.data = data;
  this.next = null;
}

function LinkedList () {
  this.head = null;
}

LinkedList.prototype.addNode = function(data) {
  if(!data) {
    return;
  }
  if(!this.head) {
    this.head = new Node(data);
  } else {
    var current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = new Node(data);
    return this.head;
  }
}

LinkedList.prototype.removeOne = function(data) {
  var current = this.head;
  if(current.data === data) {
    this.head = this.head.next;
    return this.head;
  }

  while(current.next !== null) {
    if(current.next.data === data) {
      current.next = current.next.next;
    }
    return this.head;
  }
}

var linkedList = new LinkedList();
linkedList.addNode(5);
linkedList.addNode(7);
linkedList.addNode(2);
linkedList.addNode(6);
linkedList.removeOne(7);
linkedList.removeOne(5);
linkedList.removeOne(6);
console.dir(linkedList);
