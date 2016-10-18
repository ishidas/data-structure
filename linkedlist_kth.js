var kth = 2;

var List = function(){
  this.head = head;
  this.listSize = 0;
  this.insert = insert;
  this.position = 0;
  this.listData = [];
  this.find = find;
  this.append = append;
  this.findKth = findKth;
};

function head (){
  return this.listData[0];
}
function append (ele){
  this.listData[this.position++] = ele;
}
function find (ele){
  for (var i = 0; i < this.listData.length; i++) {
    if(this.listData[i] == ele){
      return i;
    }
  }
  return -1;
}

function remove (ele){
  var elFound = this.find(ele);
  if(eleFound > -1){
    this.listData.splice(eleFound, 1);
    -- this.listSize;
    return true;
  }
  return false;
}

function insert (ele, after){
  var eleFound = this.find(after);
  for (var i = 0; i < this.listData.length; i++) {
    if(eleFound > -1){
      this.listData.splice(eleFound+1, 0, ele);
      ++ this.listSize;
      return true;
    }
    return false;
  }
}

function findKth (pos){
  this.position = pos;
  return this.listData[this.position];
}

var li = new List(5, 2);
li.append('A');
li.append('D');
li.append('S');
li.append('R');
li.append('U');
li.insert('B', 'S');

console.log(li.findKth(kth));
console.log(li.listData);
