
// 1 topshiriq juft sonni chiqarish
let num = 0;
while(num <= 10){
    if(num % 2 === 0) console.log(num);
    num++;
}

// for shakli
// for (let i = 0; i <= 10; i++) {
//     if ( i % 2 ! == 0) {
//         i++;
//         console.log(i);
//     }
// } 


// 2- topshiriq toq sonlarni chiqarish
let toq = 0;
while(toq <= 10){
    if(toq % 2 !== 0) console.log(toq);
    toq++;
}

// for shakli
for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
// N - 3, son 4 ga teng bulib qolsa sikl to'xtasin

let warr = 0;
do {
    if (warr === 4)
        break;
    console.log(warr);
    warr++;
}
while (warr <= 10);


// hafta kunlari chiqorish... promptga
let week = +prompt('hafta kunlari')
switch (week) {
    case 1:
        alert('Dushanba');
        break;
    case 2:
        alert('Seshanba');
        break;
    case 3:
        alert('Chorshanba');
        break;
    case 4:
        alert('Payshanba');
        break;
    case 5:
        alert('Juma');
        break;
    case 6:
        alert('shanba');
        break;
    case 7:
        alert('yakshanba');
        break;
    default:
        alert('Bunday hafta kuni yuq .');
}

