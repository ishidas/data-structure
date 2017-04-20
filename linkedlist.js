function LinkedList () {
  this.head = null;
  this.tail = null;
}

function Node (value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addNodeToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;  //want head to be newNode no matter this.head exsists or not
}


var node1 = new Node(100, 'node2', null);
var LL = new LinkedList();
LL.addNodeToHead(12);
LL.addNodeToHead(100);
console.log(LL);
