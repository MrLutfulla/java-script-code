// Method1===============================
const sheeps = ['echki', 'quy', 'quzi'];

const cloneSheeps = sheeps.slice();
cloneSheeps[0] = 'key'
// console.log(cloneSheeps)

// Method2================================
// let numbers = [45, 4, 9, -16, 25];

// const clonenumbers = numbers.filter(myFunction);

// function myFunction(value, array) {
//         return value > 0 || 0 >= value;
//       }
//       clonenumbers[0] = '3'
// console.log(clonenumbers)

//   mathod3===============================

// const array = ['aka', 'uka', 'opa', 'ona', 'dada']//[45, 4, 9, -16, 25]// 
// const clonearray = [...array];
// clonearray[0] = 'tog\'a';
// console.log(clonearray)
// console.log(array)

//method4====================================
const nums = [1, 2, 3, 4, 5];

// const clonenums = Array.from(nums);
// clonenums[0] = 21;
// console.log(clonenums)
// console.log(nums)
//method5=====================================
// let a = [[1], [2], [3]];
// const b = (function fun(ar){
//  return ar.map(el=>Array.isArray(el)&&fun(el)||el) 
// })(a);

// a[0][0]='a';
// console.log('a',a);
// console.log('b',b);  
// mathod5 function============================


// function deepCopyArray(arr) {
//     return arr.map(item => {
//       if (Array.isArray(item)) {
//         return deepCopyArray(item);
//       } else if (typeof item === "object") {
//         return Object.assign({}, item);
//       }
//       else return item;
//     });
//   }
  
//   let newArray = deepCopyArray(nums);
  
//   newArray[1] = 0;
//   let clone = console.log(newArray, nums);
// =================================================
const numbers = [45, 4, 9, 16, 25];

let txt = "";
let each = numbers.forEach(myFunction);
let clone = each.split('')
function myFunction(value, index, array) {
    txt += value }
console.log()







// ==========================================Temp//////==========
// function getCardNumber(cardnumber){
//     const getCard = [];
    
//     for (let i = 0; i < cardnumber.length; i++){
//         if(i < cardnumber.length - 4 ){
//             getCard.push( '*' );
//         } else{
//             getCard.push(cardnumber[i])
//         }
//     }
//     return getCard.join('')
//     }
//     sasa = [2132322424322211]
//     let salom = getCardNumber(sasa)
//     console.log(getCardNumber(salom))