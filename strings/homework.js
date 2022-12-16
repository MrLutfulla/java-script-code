// let str = "O'rmon"
// // console.log(str.charAt(3))
// console.log(str.indexOf('m', 8))

// let str = 'Lorem Ipsum Lorem ipsum dolor sit amet'

// console.log(str.substr(3, 8))

// function truncateString(str, num) {
//     return str;
//   }
  
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);
let str = 'Lorem Ipsum Lorem ipsum dolor sit amet'


let a= "hello world"
let b= "he"
 function cutDistance(a, b) {
  if (a.length !== b.length) {
    throw new Error('Strings must be of the same length');
  }

let distance = 0;

for (let i = 0; i < a.length; i += 1) {
  if (a[i] !== b[i]) {
    distance += 1;
  }
}

return distance;
}
consol.log(str.cutDistance('Lorem', 'L'))


// {string} word
// return {number[]}
 




















































function buildPatternTable(word) {
  const patternTable = [0];
  let prefixIndex = 0;
  let suffixIndex = 1;

  while (suffixIndex < word.length) {
    if (word[prefixIndex] === word[suffixIndex]) {
      patternTable[suffixIndex] = prefixIndex + 1;
      suffixIndex += 1;
      prefixIndex += 1;
    } else if (prefixIndex === 0) {
      patternTable[suffixIndex] = 0;
      suffixIndex += 1;
    } else {
      prefixIndex = patternTable[prefixIndex - 1];
    }
  }

  return patternTable;
}
 
// console.log(buildPatternTable('ab'))
