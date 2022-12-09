
// let a = +prompt("birinchi o'zgaruvchini kiriting");
// let b = +prompt("ikkinchi o'zgaruvchini kiriting");

// function circuitPower(voltage, current) {
 
// 	return voltage ** current;
// }
// console.log(circuitPower(5, 4))

// console.log(10 ** -2);


// function oppositPow(firstNum, secondNum){
//   return firstNum ** -secondNum
// }



// ===========    1 - function pow(x, n)  ===============
// function numberToPow(number, power){

//   let total = 1;
//   for (let i = 1; i <= power; i++) { 
//     total = total * number;
//   }
//   return total;
// }

// console.log( numberToPow(2, 5))


//=======================   2 - function floor(n)   ===================================
// let x = 7; 
// let y = 4;
// let x = +prompt("bo'linuvchi sonni kiriting")
// let y = +prompt("bo'luvchi sonni kiriting")

// let z = (x - x % y)/y;

// if( x % y >= y / 2 ){

//   z++
//   console.log(z)
// }
// else{
//   console.log(z)
// }


let d = +prompt(" sonni kiriting ")

if(d+0.5 >= d++){
  console.log(Math.trunc(d)+1)
}else{
  console.log(Math.trunc(d))
}



//5 - function sqrt(x, n)
//sqrt(16, 2)  4
//sqrt(8, 3)  2


// function numberToPow(number){
//   let helper = +number;
//   let total = 1
//   for (let i = 1; i <= helper; i++) { 
//     total = total * helper;
//   }
//   return total;
// }

// console.log( numberToPow(5))

// function squareroot(number) {
//   let number;
//   for (let i = number; i >= 1; i--) {
//       if (i * i === number) {
//           number = i;
//           break;
//      }
//  }
//  return number;
// }

// alert(squareroot(6))
function squareroot(number) {
  for (var i = 0; i * i <= number; i++) {
      if (i * i === number)
          return i;
 }
 return number; 
}
console.log(squareroot(5))

// function TakingPerfectSquare(Num) {
//   for (let i = 0; i <= Num; i++) {
//      let element = i;
//      if ((element == element) && (element*element == Num)) {
//         return ;
//      }
//   }
//   return false;
// }
// console.log(TakingPerfectSquare(25));






// function degree(number){
//   return number ** (1/2);
// }
// console.log(degree(16));

//sqrt(8, 3)  2
// function degree(number){
//   return number ** (1/3);
// }
// console.log(degree(8));




















//   let age = prompt('which one function', pov);

// switch (age) {
//   case 18:
//     alert("Так не сработает"); // результатом prompt является строка, а не число

//   case "18":
//     alert("А так сработает!");
//     break;

//   default:
//     alert("Любое значение, неравное значению выше");
// }


//  ===============   factorial  ==========================
// const mathm = {
//   factit: function fact(n) {
//     console.log(n)
//     if (n <= 1) {
//       return 1;
//     }
//     return n * fact(n - 1);
//   }
// };
// console.log(mathm.factit(5))