//Declaration, Expression, Arrow Functions
//Scopes

//Function Declaration

// function sayHi() {
// 	console.log("Salom")
// }

// function sayBye() {
// 	console.log("Hayr")
// }

// function showMessage() {
// 	console.log("Akbar salom berishga tayyorlanyabdi...")
// 	sayHi()
// 	console.log("Akbar gaplashyabdi...")
// 	console.log("Akbar hayrlashishga tayyorlanyabdi...")
// 	sayBye()
// }

// showMessage()

// Function Expression

// sayHi()

// let sayHi = function () {
// 	console.log("Hello")
// }

// let say = sayHi

//Function Declaration

// sayBye()

// function sayBye() {
// 	console.log("Bye")
// }

//Arrow Function

// let sayHello = () => {
// 	console.log("Hello")
// }

// sayHello()

// return

// function teaching() {
// 	console.log("Run...")
// }

// function run() {
// 	console.log("Run...")
// 	return 5
// }

// let card = run() //teaching()

// console.log(card)

//Local Scope
let num = 6

function showMessage() {
	num = 125
	console.log(num)
}

showMessage()
console.log(num)

//Arguments

function getInfo(name = "Alex", surname = "Smith", age = 15) {
	console.log(name, surname, age)
}

getInfo("Akbar", "Vayisov")

//Homework
// 1. Ism, Familiya, Age (prompt)
// 2. setInfo funksiya - bu funksiya 3ta promptdan keladigan qiymatlar object ko'rinishida qaytarsin
// 3. infos o'zgaruvchiga object saqlaymiz undagi students keyinda objectlar saqlansin

// setInfo(name, surname, age)

// {
// 	name:
// 	surname:
// 	age:
// }

let infos = {
	student1: {
		name:
	},
	student2: {
        name:

	},
	student3: {
        name:
	}
}


function setInfo(name, surname, age, i){
    infos["student" + i][name] = name;
    infos["student" + i][surname] = surname;
    infos["student" + i][age] = age;
}

for(let i = 1; i <= 3; i++){
    let name =prompt("ismingizni kiriting")
    let surname =prompt("ismingizni kiriting")
    let age =prompt("ismingizni kiriting")
    setInfo(name, surname, age)
}
console.log(infos)


//Declaration, Expression, Arrow Functions
//Scopes

//Function Declaration

// function sayHi() {
// 	console.log("Salom")
// }

// function sayBye() {
// 	console.log("Hayr")
// }

// function showMessage() {
// 	console.log("Akbar salom berishga tayyorlanyabdi...")
// 	sayHi()
// 	console.log("Akbar gaplashyabdi...")
// 	console.log("Akbar hayrlashishga tayyorlanyabdi...")
// 	sayBye()
// }

// showMessage()

// Function Expression

// sayHi()

// let sayHi = function () {
// 	console.log('Hello')
// }

// let say = sayHi

//Function Declaration

// sayBye()

// function sayBye() {
// 	console.log("Bye")
// }

//Arrow Function

// let sayHello = () => {
// 	console.log('Hello')
// }

// sayHello()

// return

// function teaching() {
// 	console.log("Run...")
// }

// function run() {
// 	console.log("Run...")
// 	return 5
// }

// let card = run() //teaching()

// console.log(card)

//Local Scope
// let num = 6

// function showMessage() {
// 	num = 125
// 	console.log(num)
// }

// showMessage()
// console.log(num)

// //Arguments

// function getInfo(name, surname, age = 15) {
// 	console.log(name, surname, age)
// }

// getInfo('Akbar', 'Vayisov', 30)

//Homework
// 1. Ism, Familiya, Age (prompt)
// 2. setInfo funksiya - bu funksiya 3ta promptdan keladigan qiymatlar object ko'rinishida qaytarsin
// 3. infos o'zgaruvchiga object saqlaymiz undagi students keyinda objectlar saqlansin

setInfo(name, surname, age)

function setInfo(name, surname, age) {
	return {
		name: name,
		surname: surname,
		age: age,
	}
}

let studentInfos = {}

for (let i = 0; i < 2; i++) {
	let firstName = prompt('Sizning ismingiz nima: ?', 'Diyorbek')
	let lastName = prompt('Sizning familiyangiz nima: ? ', 'Karomov')
	let age = prompt('Sizning yoshingiz nechchida: ?', '16')

	studentInfos[firstName] = setInfo(firstName, lastName, age)
}

console.log(studentInfos)