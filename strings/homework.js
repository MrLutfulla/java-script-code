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

 let str = 'a1b2c3d4e5f6g7k'

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
//========================= substring=======================================================================================================================================
// just variable                                                                                                                                                        ////
                                                                                                                                                                        ////
let salom = 'a1b2c3d4e5f6g7k'                                                                                                                                           ////
                                                                                                                                                                        ////    
// console.log(salom.substring(1, 44))                                                                                                                                  ////
//we create function  first from           since = default   =====funksiya yaratib oldik substr uchun va unnga chegaralarni o'zgaruvchilar orqali berdik                ////
function substring(first, until = salom.length){                                                                                                                        ////
 //keep necessary text ====bizga kerakli bulgan matnni Saqlash uchun bu uzgaruvchini oldik                                                                              ////
    let txt = ''                                                                                                                                                        ////
//this condition trust ====== shar tekshirmoqdamiz birinchi berilgan o'zgaruvchi ikkinchisidan katta yoki berilgan sondan katta bulsa bu sikl  bajariladi               ////
      // 1 < 4       va until < uzunligdan                                                                                                                              ////
if (first < until && until <= salom.length && first >= 0){                                                                                                              ////
//==1.loop or cycle for find our nessary index number====                                                                                                               ////
    for (; first < until; first++){                                                                                                                                     ////
//add value each index's from the first number                                                                                                                          ////
    txt = txt + salom[first];                                                                                                                                           ////
 }                                                                                                                                                                      ////
//give back nessary info                                                                                                                                                ////
 return txt;                                                                                                                                                            ////
}else if(first < until && until > salom.length && first >= 0){                                                                                                          ////
//===2. this variable we must for appear underfined === agar birinchi uzgaruvhi salom.length dan katta bulib ketganida underfined chiqardi buni oldini oldik            ////
    let until = salom.length                                                                                                                                            ////
    for (; first < until; first++){                                                                                                                                     ////
         txt = txt + salom[first];                                                                                                                                      ////
    }                                                                                                                                                                   ////
    return txt;                                                                                                                                                         ////
}else if( first < 0 && until < salom.length && until > 0 ){ //===3.                                                                                                     ////
    first = 0;                                                                                                                                                          ////
    for(; first < until; first++){                                                                                                                                      ////
        txt = txt + salom[first];                                                                                                                                       ////
    }                                                                                                                                                                   ////
    return txt;                                                                                                                                                         ////
}else if( first < 0 && until > salom.length && until > 0 ){   //===4.                                                                                                   ////
    first = 0;                                                                                                                                                          ////
    until = salom.length                                                                                                                                                ////
                                                                                                                                                                        ////
    for(; first < until; first++){                                                                                                                                      ////
        txt = txt + salom[first];                                                                                                                                       ////
    }                                                                                                                                                                   ////
    return txt;                                                                                                                                                         ////
                                                                                                                                                                        ////
    // ================================================================= ok ============================================================================================////       
}else if( first > until && first <= salom.length && until > 0){                                                                                                         ////
                                                                                                                                                                        ////
                                                                                                                                                                        ////
//===1  just loop for first is bigger than until                                                                                                                        ////
    for(; first > until; until++){                                                                                                                                      ////
//this is shown above                                                                                                                                                   ////
    txt = txt + salom[until]                                                                                                                                            ////
    }                                                                                                                                                                   ////
    return txt; // yes=================                                                                                                                                 ////
}else if ( first > until && first > salom.length && until > 0){                                                                                                         ////
  first = salom.length       //===.2//this solution if first bigger then of salom length                                                                                ////
for(; first > until; until++){                                                                                                                                          ////
        txt = txt + salom[until]                                                                                                                                        ////
        }                                                                                                                                                               ////
return txt                                                                                                                                                              ////
}else if(until < 0 && first < salom.length && first > 0){  // 3====                                                                                                     ////
    until = 0;                                                                                                                                                          ////
    for(; first > until; until++){                                                                                                                                      ////
        txt = txt + salom[until];                                                                                                                                       ////
    }                                                                                                                                                                   ////
    return txt;                                                                                                                                                         ////
}else if( until < 0 && first > salom.length && first > 0 ){   //===4.                                                                                                   ////
    until = 0;                                                                                                                                                          ////
    first = salom.length                                                                                                                                                ////
    for(; first > until; until++){                                                                                                                                      ////
        txt = txt + salom[until];                                                                                                                                       ////
    }                                                                                                                                                                   ////
    return txt;                                                                                                                                                         ////
                                                                                                                                                                        ////
}                                                                                                                                                                       ////
}                                                                                                                                                                       ////
                                                                                                                                                                        ////
// console.log(substring(2, 5))                                                                                                                                            ////
// ==================================================================================================================================================================== ////
// console.log(salom.substring(2, 5))


//mazzami
//========================= substr==========================================================================================================================================
// just variable                                                                                                                                                        ////
                                                                                                                                           ////
                                                                                                                                                                        ////    
// console.log(str.substring(1, 44))                                                                                                                                  ////
//we create function  start from           since = default   =====funksiya yaratib oldik substr uchun va unnga chegaralarni o'zgaruvchilar orqali berdik                ////
function substr(start, end = str.length){                                                                                                                             ////
 //keep necessary text ====bizga kerakli bulgan matnni Saqlash uchun bu uzgaruvchini oldik                                                                              ////
    let txt = ''                                                                                                                                                        ////
//this condition trust ====== shar tekshirmoqdamiz birinchi berilgan o'zgaruvchi ikkinchisidan katta yoki berilgan sondan katta bulsa bu sikl  bajariladi               ////
      // 1 < 4       va end < uzunligdan                                                                                                                                ////
if (start < end && end <= str.length && start >= 0){                                                                                                                  ////
//==1.loop or cycle for find our nessary index number====                                                                                                               ////
    for (; start < end; start++){                                                                                                                                       ////
//add value each index's from the start number                                                                                                                          ////
    txt = txt + str[start];                                                                                                                                           ////
 }                                                                                                                                                                      ////
//give back nessary info                                                                                                                                                ////
 return txt;                                                                                                                                                            ////
}else if(start < end && end > str.length && start >= 0){                                                                                                              ////
//===2. this variable we must for appear underfined === agar birinchi uzgaruvhi str.length dan katta bulib ketganida underfined chiqardi buni oldini oldik            ////
    let end = str.length                                                                                                                                              ////
    for (; start < end; start++){                                                                                                                                       ////
         txt = txt + strstr[start];                                                                                                                                      ////
    }                                                                                                                                                                   ////
    return txt;                                                                                                                                                         ////
}else if( start < 0 && end < str.length && end > 0 ){ //===3.                                                                                                         ////
    start = 0;                                                                                                                                                          ////
    for(; start < end; start++){                                                                                                                                        ////
        txt = txt + str[start];                                                                                                                                       ////
    }                                                                                                                                                                   ////
    return txt;                                                                                                                                                         ////
}else if( start < 0 && end > str.length && endend > 0 ){   //===4.                                                                                                    ////
    start = 0;                                                                                                                                                          ////
    end = str.length                                                                                                                                                  ////
                                                                                                                                                                        ////
    for(; start < end; start++){                                                                                                                                        ////
        txt = txt + str[start];                                                                                                                                       ////
    }                                                                                                                                                                   ////
    return txt;                                                                                                                                                         ////
                                                                                                                                                                        ////
    // ================================================================= ok ============================================================================================////       
}else if( start > end && start <= str.length && end > 0){                                                                                                         ////
                                                                                                                                                                        ////
                                                                                                                                                                        ////
//===1  just loop for startstart is bigger than end                                                                                                                        ////
    for(; start > end; end++){                                                                                                                                      ////
//this is shown above                                                                                                                                                   ////
    txt = txt + str[end]                                                                                                                                            ////
    }                                                                                                                                                                   ////
    return txt; // yes=================                                                                                                                                 ////
}else if ( start > end && start > str.length && end > 0){                                                                                                         ////
    start = str.length       //===.2//this solution if start bigger then of str length                                                                                ////
for(; start > end; end++){                                                                                                                                          ////
        txt = txt + str[end]                                                                                                                                        ////
        }                                                                                                                                                               ////
return txt                                                                                                                                                              ////
}else if(end < 0 && start < str.length && start > 0){  // 3====                                                                                                     ////
    end = 0;                                                                                                                                                          ////
    for(; start > end; end++){                                                                                                                                      ////
        txt = txt + str[end];                                                                                                                                       ////
    }                                                                                                                                                                   ////
    return txt;                                                                                                                                                         ////
}else if( end < 0 && start > str.length && start > 0 ){   //===4.                                                                                                   ////
    end = 0;                                                                                                                                                          ////
    start = str.length                                                                                                                                                ////
    for(; start >= end; end++){                                                                                                                                      ////
        txt = txt + str[end];                                                                                                                                       ////
    }                                                                                                                                                                   ////
    return txt;                                                                                                                                                         ////
                                                                                                                                                                        ////
}                                                                                                                                                                       ////
}                                                                                                                                                                       ////
                                                                                                                                                                        ////
console.log(substr(-2, 5))                                                                                                                                            ////
// ==================================================================================================================================================================== ////
// console.log(salom.substring(2, 5))
console.log(salom.substr(2, 5))
console.log(salom)

function easyadd(a, b){
    for(; a > b; b++)
    txt = txt + salom[a]; 
    return txt
}
// ===========================





// function slice(str, start, end = str.length) {
// 	let result = ''
// 	for (; start < end; start++) {
// 		result += str[start]
// 	}
// 	return result
// }

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