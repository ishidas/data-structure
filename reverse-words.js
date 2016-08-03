'use strict';
const word1 = 'okawaS adihsI';

function reverseWord (word){
  let resultArray = [];

  for (let i = word.length - 1; i >= 0 ; i--) {
    resultArray.push(word[i]);
  }
  return resultArray.join('');
}

let result = reverseWord(word1);
console.log('result', result);
