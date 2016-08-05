'use strict';
const a = 'Mr John Smith     ';
const b = 'My Birthday wish ';

function urlify(str){
  let trimmed = str.trim().split('');
  let spaceHolder = '%20';
  let arr = [];
  trimmed.forEach((letter)=>{
    if(letter === ' '){
      arr.push(spaceHolder);
    } else {
      arr.push(letter);
    }
  });
  let ans =  arr.join('');
  return ans;
}

let result1 = urlify(a);
let result2 = urlify(b);
console.log('result1', result1);
console.log('result2', result2);
