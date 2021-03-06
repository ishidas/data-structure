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

LinkedList.prototype.removeTail = function () {
  if(!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return val;
}

LinkedList.prototype.search = function (searchValue) {
  var currentNode = this.head;
  while(currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
}

LinkedList.prototype.indexOf = function (searchValue) {
    var results = [];
    var currentNode = this.head;
    var counter = 0;
    while(currentNode) {
      if(currentNode.value === searchValue) results.push(counter);
      currentNode = currentNode.next;
      counter += 1;
    }
    return results;
}

var node1 = new Node(100, 'node2', null);
var LL = new LinkedList();
// LL.addNodeToHead(12);
// LL.addNodeToHead(100);

LL.addNodeToTail(50);
LL.addNodeToTail(30);
LL.addNodeToTail(150);
LL.addNodeToTail(50);
LL.addNodeToTail(200);
LL.addNodeToTail(50);

// LL.removeTail();
// LL.removeHead();

console.log(LL.indexOf(50));
