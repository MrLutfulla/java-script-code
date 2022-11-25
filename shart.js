
let prom = prompt("ismingizni kiriting");
let prom2= prompt("yoshingizni kiriting");
console.log(String( prom));


// if else
let num = prom2

if (num <16) {
	console.log("Voyaga yetmagansiz");
    
    if(num<6){
        console.log("Bog'chaga borishinigiz kerak");
    }
    else{
        
        console.log("Maktabga boryapsiz");
    }
 
}
else if(num<50){
        if(num<18){
            console.log(" siz pasport olgansiz");
        }
        else{
            console.log( "Voyaga yetdingiz");
        }

           
}
else if(num < 65){
    console.log( "siz ishga borasiz")
}
else {
    console.log( " Tabriklayman siz xozirgina pensiyaga chiqdinigiz")
}


