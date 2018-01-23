'use strict';

const stringA1 = 'abc';
const stringA2 = 'bac';
const stringC1 = 'a';
const stringC2 = 'a';
const stringB1 = 'a h m';
const stringB2 = 'h m m';
const emptyString = '';
const nonemptyString = 'sn';

function permutaion(str1, str2) {
  //when one or the other is empty stringA
  if(!str1.length) {
    if(!str2.length) {
      return true;
    } else {
      return false;
    }
  }

  //when one or the other has length of 1
  if(str1.length === 1) {
    if(str2.length === 1) {
      if(str1 === str2) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

    var obj = {};
    for (var i = 0; i < str1.length; i++) {
        obj[str1[i]] = (obj[str1[i]] || 0) + 1;
    }
    for (var j in obj) {
      for (var k = 0; k < str2.length; k++) {
        if (obj.hasOwnProperty(str2[k])) {
          obj[str2[k]] --;
          if(obj[str2[k]] === 0) {
            delete obj[str2[k]];
          }
        } else {
          return false;
        }
      }//for loop
    } //for in

  return Object.keys(obj).length === 0;
} //end of function

console.log(permutaion(stringA1, stringA2));
console.log(permutaion(stringB1, stringB2));
console.log(permutaion(stringC1, stringC2));
console.log(permutaion(emptyString, nonemptyString));
