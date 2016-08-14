'use strict';
// cracking the coding interview 1.2

const str1 = 'ab!d0 e';
const str2 = 'a0 d!eb';

function checkPermutation(string1, string2){
  let strOne = string1.split('').sort().join();
  let strTwo = string2.split('').sort().join();
  console.log('string One', strOne);
  console.log('string Two', strTwo);
  if(strOne === strTwo) return true;
  if(strOne !== strTwo) return false;
}


let result = checkPermutation(str1, str2);
console.log('result', result);
