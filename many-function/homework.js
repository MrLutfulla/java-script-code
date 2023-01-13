




function getCardNumber (cardNumber){

    if (cardNumber.length > 16 ){

    console.log('Enter the correct card number');

    }else if( cardNumber.length < 16){

        console.log('The card number is incomplete')

        console.log(cardNumber.slice(0, 4 ) +' ' + cardNumber.slice(4, 8) + ' '+ cardNumber.slice(8, 12) + ' ' + cardNumber.slice(12) )

    }else if(  isNaN(+cardNumber)){

        console.log('Raqam kiriting siz string kiritdingiz');

    }else{ 
         if(cardNumber.slice(0, 4 )=='9860'){

             console.log('You have entered the correct card number');
             console.log('This is Humo card');

            }else if (cardNumber.startsWith("8600")){

                console.log('You have entered the correct card number');
                console.log('This is Uzcard card');

            }else if (cardNumber.startsWith('8778') || cardNumber.startsWith( '4000')){
                
                console.log('You have entered the correct card number');
                console.log('This is VISA card');

            }else{
                console.log("This card was not found");
            }

    console.log(cardNumber.slice(0, 4 ) +' ' + '****' + ' '+ '****' + ' ' + cardNumber.slice(12) );
} 
}
str = '9860123426218122'
  getCardNumber(str);


  
  let myNumber = 1010101010101010;
  console.log(myNumber.toString(10))