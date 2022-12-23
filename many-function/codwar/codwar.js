function squareIt(number) {
    return number * number;
 }
// method1===============
// function(str){

// }

// palindrom
for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) { 
        return false;
    }
}
// teskari

function incorrent(array) {
    let invert = [];
    for(let i = 0; i < array.length; i++){
      if(array[i] > 0){
        invert.push(array[i] - (array[i] * 2));
      }
      
      if(array[i] < 0){
        invert.push(Math.abs(array[i]));
      }
  
      if(array[i] == 0){
        invert.push(-0);
      }
    }
    return incorrent;
  }
// undovni yuqotish


function remove(s){
    return s.split('!').join('') + '!';
  }
