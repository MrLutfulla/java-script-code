
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

// error======================xato
// let d = +prompt(" sonni kiriting ")

// if((d+0.5) < d+1){
//   d %
//   console.log(Math.trunc(d)-0.5)
// }else{
//   console.log(Math.trunc(d))
// }



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
// function squareroot(number) {
//   for (var i = 0; i * i <= number; i++) {
//       if (i * i === number)
//           return i;
//  }
//  return number; 
// }
// console.log(squareroot(5))

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
const mathm = {
  factit: function fact(n) {
    console.log(n)
    if (n <= 1) {
      return 1;
    }
    return n * fact(n - 1);
  }
};
console.log(mathm.factit(5))

// function pow(x, y){
//   return x ** y
// }
// function pow2( x, n) {
//   let total = 1
//   for ( let i = 0 )
// }

// let billion = 1_000_000_000

// let milliard = 2e9

// let num = 1e-6

// console.log(0xf)

//toString

let num1 = 14235

//console.log(num1.toString(16))  numdagi qiymatni 16lik sistemaga o'giradi

// console.dir(Math)
// 2 - 3

// let num = -2.7

// console.log(Math.floor(num)) kichik tomonga qarab
// console.log(Math.ceil(num)) katta tomonga qarab
// console.log(Math.round(num)) haqiqiy yaxlitlash

// console.log(Math.trunc(-2.7)) -2
// console.log(Math.floor(-2.7)) -3

// let rnd = Math.floor(Math.random() * 100)
let rnd2 = Math.random() * 100

// console.log(+rnd2.toFixed(20))

let num3 = '100.5px'

console.log(parseInt(num3))
console.log(parseFloat(num3))

console.log(NaN === NaN)

// function stringToNum(str) {
// 	if (+str > 0 || +str <= 0) {
// 		console.log(+str)
// 	} else {
// 		console.log('Bu NAN')
// 	}
// } Azamat's Method

let string = undefined

function stringToNum(str) {
	if (isNaN(str)) {
		console.log('Bu NAN')
	} else {
		console.log(+str)
	}
}

stringToNum(string)

let inf = Infinity

let inf2 = -Infinity

// console.log(typeof inf)

// console.log(isFinite('3a'))

Math.pow(2, 3) // 8
Math.sqrt(16) // 4

// 1 - function pow(x, n)
//pow(2, 3) 8

function pow(x, n) {
	return x ** 1 / n
}

function pow2(x, n) {
	let total = 1
	for (let i = 0; i < n; i++) {
		total = total * x
		// total *= x
	}
	return total
}

console.log(pow2(2, 3))

function pow3(x, n) {
	if (n === 1) {
		return x
	} else {
		return x * pow3(x, n - 1)
	}
}
console.log(pow3(2, 3))
// [[[]]]]]]]]]]]]]]]]==========
//function pow(x, n) {
// 	let result = 1;

// 	for (let i = 0; i < n; i++) {
// 	  result *= x;
// 	}
  
// 	return result;
//   }============================
// function pow(x, n) {
// 	if (n < 0) return NaN;
// 	if (Math.round(n) != n) return NaN;
  
// 	let result = 1;
  
// 	for (let i = 0; i < n; i++) {
// 	  result *= x;
// 	}
  
// 	return result;
//   }
//2 - function floor(n)
//floor(2.7324234) 2

function floor(n) {
	return n % 1 >= 0.5 ? n.toFixed(0) - 1 : n.toFixed(0)
}

console.log(floor(2.6))

//3 - function ceil(n)
//ceil(2.7)  3

function ceil(n) {
	return n % 1 >= 0.5 ? n.toFixed(0) : +n.toFixed(0) + 1
}

console.log(ceil(2.2))

//4 - function round(n)
//round(2.7)  3
//round(2.7)  2

function round(n) {
	return n.toFixed(0)
}

console.log(round(2.6))

//5 - function sqrt(x, n)
//sqrt(16, 2)  4
//sqrt(8, 3)  2

function sqrt(x, n) {
	return x ** (1 / n)
}