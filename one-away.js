'use strict';
// cracking the coding interview 1.5

function checkOneAway (str1, str2) {
  if(Math.abs(str1.length - str2.length) >= 2){
    return false;
  }

  let arrStr2 = str2.split('');
  let firstChar;
  let Dict = {};
  let letter;
  let counter = 0;

  // Creating an obj with first str
  for (var i = 0; i < str1.length; i++) {
    letter = str1[i];
    Dict[letter] = Dict[letter] || 0;
    Dict[letter] ++;
  }

  // Going thru each letter in string to check if obj has property if not create one
  for (var j = 0; j < arrStr2.length; j++) {
    firstChar = arrStr2[j];
    console.log('firstChar', firstChar);
    if(Dict.hasOwnProperty(firstChar)){
      Dict[firstChar]++;
    } else {
      Dict[firstChar] = Dict[firstChar] || 0;
      Dict[firstChar]++;
    }
  }

  //adding division remainder to count
  for (var prop2 in Dict) {
    counter += Dict[prop2] % 2;
    console.log('Dict', Dict);
  }

  // check if the total of counter is less than 2
  if(counter < 2) {
    return true;
  } else {
    return false;
  }
}



console.log('Are str1 & str2 one away?', checkOneAway('abc-', 'abc'));
console.log('Are str1 & str2 one away?', checkOneAway('abc- ', 'abc'));
console.log('Are str1 & str2 one away?', checkOneAway('abc ', ' abc'));
