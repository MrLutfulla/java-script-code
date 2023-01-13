// body mass index = BMI
// BMI = weight / (height * height)
// BMI < 14.99 underweight; 15.00 < BMI < 24.99 norm; 25 < BMI overweight;

    // function bmiBalance(weight, height){
        
    //         bmi = weight / ( height * height )
    //     return bmi
    // }  
    // console.log(bmiBalance(64, 1.78))


    // this function with if else
    function bmiBalance ( weight, height){
        bmi = weight / ( height * height)
        if( bmi <= 14.99){
            return "sizning BMI ingiz "+ bmi + " siz semirishingiz kerak"
            // console.log("sizning BMI ingiz "+ bmi + " siz semirishingiz kerak")
        }else if ( 15 <= bmi && bmi < 25){
            return "sizning BMI ingiz "+ bmi + " siz normadasiz"
            // console.log("sizning BMI ingiz "+ bmi + " siz normadasiz")
        } else{ 
            return "sizning BMI ingiz " + bmi + " ariqlashingiz kerak"
            // console.log("sizning BMI ingiz "+ bmi + " ariqlashingiz kerak")
    }

    }
// console.log(bmiBalance(64, 1.75))


// codementor.io pul ishlash uchun yoki kodi baglarni topish uchun kerakli  programmistlar bor
// kunlik dasturlashni qilishni qilish uchun
// upwork frelanserlik qilish uchun kerakli sayt
// elements.envanto.com tayyor pagelar frontend uchun
// abdusattor abduraximov 3d madeling ochiq kurs Nurmuhammad uchun
// obs stream qilish uchun kerakli app
// fullstackopen.com sayti 0 dan boshlab  reack notejs va boshqa narsalar urganiladigan sayt\0
// machine learning urganinsh yaxshi 
// leetcode algortimlar urganinsh uchun
