function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

console.log(reverseNumber(32243)); // Output: 34223
