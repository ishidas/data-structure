'use strict';
// cracking the coding interview 1.1

const str1 = 'abcde';//unique
const str2 = 'adeac';//dup

function isUnique (str){
  for (var i = 0; i < str.length; i++) {
    let a = str[i];
    let sub = str.substring(i + 1);
    for (var j = 0; j < sub.length; j++) {
      if(a === sub[j]) return false;
      if(sub.length === 1) return true;
      isUnique(sub);
    }
  }
}

let result1 = isUnique(str1);
let result2 = isUnique(str2);
console.log('result 1', result1);
console.log('result 2', result2);
