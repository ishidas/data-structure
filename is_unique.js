'use strict';

const stringA = 'abcdefgh';
const stringB = 'abbdfgh';
const stringEmpty = '';
const stringOneChar = 'a';
const stringTwoChar = 'ab';

//sort string
//find duplicate if no duplicate, return true
function isUnique(str) {
  if(!str) return 'empty string';
  if(str.length === 1) return true;
  var sortedStr = str.split('').sort();
  var first, second;
  for (var i = 0; i < sortedStr.length - 1; i++) {
    first = sortedStr[i];
    second = sortedStr[i + 1];
    if(first === second) {
      return false;
    }
  }
  return true;
}
console.log(isUnique(stringA));
console.log(isUnique(stringB));
console.log(isUnique(stringEmpty));
console.log(isUnique(stringOneChar));
console.log(isUnique(stringTwoChar));
