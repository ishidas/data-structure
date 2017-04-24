// 4! = 4 * 3 * 2 * 1

function factorial (num) {
  if(num < 3) return num;
  else return num * factorial(num - 1);
}

console.log(factorial(5));
