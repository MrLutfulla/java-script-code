// hello array 
const my_numbers = [1, 2, 4, 5]
// console.log(my_numbers)

my_numbers.push(88)  //massivga oxirdan yangi elemntni qo'shadi

my_numbers[2] = 56  // massivgadi malumotni o'zgartirish yani qushish indexsi buyicha oxirgi endexsi

my_numbers.unshift(10)

my_numbers.pop()   //massivdagi eng oxirgi elementni o'chirib yuboriladi

let array







function makeUser(name, age) {
    return {
      name: name,
      age: age
    };
  }
  
  let user = makeUser("John", 30);
  arr = ['apple', 'samsung', 'xiaomi','hello', 'huawei']
  // console.log(user);
  // pop=======================
function pop(arre){
  arre.length = arre.at(-1)
  return array
}

console.log(pop(arr))


function push(array, item){
	return array[array.length] = item
}

push(arr, 'poco')
push(arr, 'vivo')


function pop(array){
	array.length = array.length - 1
	return array
}
pop(arr)
pop(arr)


// console.log(arr)
let arr = ["apple","kiwi","pineapple","lemon"];
arr.splice(5, 0, "orange")
console.log(arr);
function push(arre1, item){
  arre1.splice(5, 0, item)
    return arre1
}
console.log(arr, "hello");