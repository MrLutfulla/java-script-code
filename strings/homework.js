// // let str = "O'rmon"
// // // console.log(str.charAt(3))
// // console.log(str.indexOf('m', 8))

// // let str = 'Lorem Ipsum Lorem ipsum dolor sit amet'

// // console.log(str.substr(3, 8))

// // function truncateString(str, num) {
// //     return str;
// //   }
  
// //   truncateString("A-tisket a-tasket A green and yellow basket", 8);
// let str = 'Lorem Ipsum Lorem ipsum dolor sit amet'


//  function cutDistance(a, b) {
//   if (a.length !== b.length) {
//     throw new Error('Strings must be of the same length');
//   }

// let distance = 0;

// for (let i = 0; i < a.length; i += 1) {
//   if (a[i] !== b[i]) {
//     distance += 1;
//   }
// }

// return distance;
// }
// consol.log(str.cutDistance('hello'))

let str = 'Lorem Ipsum Lorem ipsum dolor sit amet'

function customIndexOf(str, searchStr, start = 0) {
	start = start === 0 ? start : start + 1

	let status = false

	for (; start < str.length - 1; start++) {
		// "W"						'Web'
		if (str[start] === searchStr) {
			return start
		}
		for (let j = 0; j < searchStr.length; j++) {
			// "W"                  "W"
			if (str[start] === searchStr[j]) {
				start++
				status = true
			} else {
				status = false
			}
		}
		if (status) {
			return start - searchStr.length
		}
	}
	return -1
}
// O(n^2)

// console.log(customIndexOf(str, 'o', 2))


// const numbers = salom.split('');
// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x]; 
// }
//========================= substring=========================================================
// just variable

let salom = 'a1b2c3d4e5f6g7k'
// console.log(salom.substr(1, 44))
// console.log(salom.substring(1, 44))
//we create function  from           since = default   =====funksiya yaratib oldik substr uchun va unnga chegaralarni o'zgaruvchilar orqali berdik
        function substr(first, until = salom.length){

 //keep necessary text ====bizga kerakli bulgan matnni Saqlash uchun bu uzgaruvchini oldik
    let txt = ''

//this condition trust ====== shar tekshirmoqdamiz birinchi berilgan o'zgaruvchi ikkinchisidan katta yoki berilgan sondan katta bulsa bu sikl  bajariladi
      // 1 < 4    va until < uzunligdan
if (first < until && until <= salom.length){

// this variable we must for appear underfined === agar birinchi uzgaruvhi salom.length dan katta bulib ketganida underfined chiqardi buni oldini oldik
// let until = salom.length


//loop or cycle for find our nessary index number====
 for (; first < until; first++){

//add value each index's from the first number
  txt = txt + salom[first]; 
 }

//give back nessary info
 return txt


 //if above information is not correct work this site
//forexample, 4 >  1    or  4    >  7  
}else if( first > until || first > salom.length){

//  let first = salom.length                 //this solution if first bigger then of salom length
//  just loop for first is bigger than until
    for(; first > until; until++)
//this is shown above 
    txt = txt + salom[until]
    return txt
}else if ( until > salom.length)
return "chumo"

}

console.log(substr(14, 4))
// =======================================================================







function slice(str, start, end = str.length) {
	let result = ''
	for (; start < end; start++) {
		result += str[start]
	}
	return result
}

// console.log(slice(str, 1, 3)) //pen


// function buildPatternTable(word) {
//   const patternTable = [0];
//   let prefixIndex = 0;
//   let suffixIndex = 1;

//   while (suffixIndex < word.length) {
//     if (word[prefixIndex] === word[suffixIndex]) {
//       patternTable[suffixIndex] = prefixIndex + 1;
//       suffixIndex += 1;
//       prefixIndex += 1;
//     } else if (prefixIndex === 0) {
//       patternTable[suffixIndex] = 0;
//       suffixIndex += 1;
//     } else {
//       prefixIndex = patternTable[prefixIndex - 1];
//     }
//   }

//   return patternTable;
// }
 
// console.log(buildPatternTable('ab'))
