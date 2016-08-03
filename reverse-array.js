'use strict';
const arr = ['g','f','e','d','c','b','a'];
const arr2 = [6,5,4,3,2,1,0];
const arr3 = ['f','o','o', 5 ,' ', '!'];

function reverse (arr){
  let mid = Math.floor(arr.length/2);
  let end = arr.length -1;
  for (var i = 0; i < mid; i++) {
    let val = arr[i];
    arr[i] = arr[end - i];
    arr[end - i] = val;
  }
  return arr;
}

let result1 = reverse(arr);
let result2 = reverse(arr2);
let result3 = reverse(arr3);
console.log('reuslt1', result1);
console.log('reuslt2', result2);
console.log('reuslt3', result3);
