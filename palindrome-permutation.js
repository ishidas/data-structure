'use strict';
// cracking the coding interview 1.4

function permutationOfPalindrome (str){
  let Dict = {};
  let letter;
  let countNum = 0;
  for (var i = 0; i < str.length; i++) {
    letter = str[i].toLowerCase();
    Dict[letter] = Dict[letter] || 0;
    Dict[letter] ++;
  }

  for (var prop in Dict) {
    countNum += Dict[prop] % 2;
    // console.log('prop', prop);
    // console.log('num', Dict[prop]%2);
  }
  if(countNum < 2){
    return true;
  } else {
    return false;
  }
}

console.log('Is Permutation Of Palindrome?', permutationOfPalindrome('abCbcAfgg f'));
