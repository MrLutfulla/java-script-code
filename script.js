let fname='Lutfulla'
let lname='Murodjonov'
let age=20
let study='TATU Unversity'
let info='i am not married'
console.log('mening ismim '+ fname+' '+lname +' Mening yoshim '+age +' men '+study+" o'qiyman"+' '+ info);
console.log( 2400/8); //math function
// o'girlandi
const wrapper = document.querySelector('.all_menu_wrapper')
const url = 'http://ig-food-menus.herokuapp.com/our-foods'
const search = document.querySelector('.all_search')
const loader = document.querySelector('.loader')

const  fetchData= async (url)=>{
    
    try {

        loader.classList.remove('hidden')
        const request = await fetch(url, {
            
            referrerPolicy: "unsafe-url" 
        });
        const datas = await request.json()
        getData(datas)


    } catch (err) {
        console.log(err.message)
        loader.innerHTML = ` <h1 class='error'> Oop! We have a problem with server check it soon ! </h1>`
    }
}

const getData = (data)=>{
loader.classList.add('hidden')
    
    data.map(
        (food)=>{
            let creator = document.createElement('div')
            creator.setAttribute('id' , `${food.dsc}`)
            creator.innerHTML= `
    <div class="all_menu_card">
                <img src=${food.img} alt=${food.name}>
                <h1 class="all_card_title">${food.name}</h1>
                <p class="all_card_dsc">Desc: ${food.dsc}</p>
                <div class="all_card_dets">
                    <p class="all_card_price">Price: $ ${food.price}</p>
                    <p class="all_card_price">Rate: ${food.rate} ⭐</p>
                </div>
                <p class="all_card_loc">Location: ${food.country}</p>
            </div>
    `
    wrapper.appendChild(creator)
        }
    )
    

}
search.addEventListener('input' , (e)=>{
    let searchStr = e.target.value.toLowerCase()
    for (i = 1; i < wrapper.childNodes.length; i++) {
        const card = wrapper.childNodes[i].getAttribute('id').toLowerCase()
        if (card.includes(searchStr)) {
            wrapper.childNodes[i].classList.remove('hidden')
        } else {
            wrapper.childNodes[i].classList.add('hidden')
        }
    }




})


fetchData(url)