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

LinkedList.prototype.addNodeToTail = function (value) {
  var newNode = new Node(value, null, this.tail);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function () {
  if(!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
}

var node1 = new Node(100, 'node2', null);
var LL = new LinkedList();
// LL.addNodeToHead(12);
// LL.addNodeToHead(100);

LL.addNodeToTail(50);
LL.addNodeToTail(30);
LL.addNodeToTail(150);
LL.addNodeToHead(200);
LL.removeHead();
console.log(LL);