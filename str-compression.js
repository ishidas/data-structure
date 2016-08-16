'use strict';
// string compression if longer than original return original
//Cracking the Coding Interview 1.6

function compressString(str) {
  if(str.length <= 1) return str !== ' '? str : 'empty string';
  let Dict = {};
  let letter;
  let counter = 0;
  let result = [];

  for (var i = 0; i < str.length; i++) {
    letter = str[i];
    if(letter === ' '){
      console.log('empty');
    } else {
      Dict[letter] = Dict[letter] || 0;
      Dict[letter]++;
    }
  }
  for (var prop in Dict) {
    console.log('prop', prop);
    result.push(prop);
    result.push(Dict[prop]);
    counter += Dict[prop] % 2;
  }

  if(str.length <= 3 && counter === 1){
    return str;
  } else {
    console.log('arr', result);
    return result.join('');
  }
}

console.log(compressString('aab'));
console.log(compressString('aa bbb cda'));
