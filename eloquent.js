Minimum:

function min(a, b) {
    return Math.min(a, b)
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


Recursion:

function isEven(number) {
    if (number < 0) {
        return false;
    } else if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number - 2);
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false


Bean counting:

function countBs(str) {
  count = 0
  for (i = 0; i < str.length; i++) {
    if (str[i].charAt() === 'B')
    count ++;
}
  return count;
}

function charCount(str, arg) {
  count = 0
  for (i = 0; i < str.length; i++) {
    if (str[i].charAt() === arg)
    count ++;
}
  return count;
}

console.log(countBs("BBBBC"));
// → 2
console.log(charCount("karkarka", "k"));
// → 3
