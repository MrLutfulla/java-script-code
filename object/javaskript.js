let user = {
    name: "John",
    age: 30
  };
  
  for (let value of Object.values(user)) {
    console.log(value); 
  }
//====================================    waw   ============================================
  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  let doublePrices = Object.fromEntries(
    // obyektdagi keyning qiymatlari(value)ni 2 barobar oshirib beradi
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );
  
//   alert(doublePrices.meat); 
//=====================================   waw   ======================================
// let options = {
//     title: "Menu",
//     height: 200,
//     width: 100
//   };
  
//   let {title, ...rest} = options;
  
//   // title="Menu", rest={height: 200, width: 100}
//   console.log(rest.height);  // 200
//   console.log(rest.width); 
//===================           waw           ===========================

  let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // деструктуризация разбита на несколько строк для ясности
  let {
    size: { // положим size сюда
      width,
      height
    },
    items: [item1, item2], // добавим элементы к items
    title = "Menu" // отсутствует в объекте (используется значение по умолчанию)
  } = options;
  
  console.log(title);  // Menu
  console.log(width);  // 100
  console.log(height); // 200
  console.log(item1);  // Cake
  console.log(item2);  // Donut

// мы передаём объект в функцию
//===========================================        waw                    ==============================
// let options = {
//     title: "My menu",
//     items: ["Item1", "Item2"]
//   };
  
//   // ...и она немедленно извлекает свойства в переменные
//   function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     // title, items – взято из options,
//     // width, height – используются значения по умолчанию
//     alert( `${title} ${width} ${height}` ); // My Menu 200 100
//     alert( items ); // Item1, Item2
//   }
  
//   showMenu(options);