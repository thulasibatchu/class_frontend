let prod_price=[98,198,298,398]
// let new_prod_price=[]
//for of
// for(let price of prod_price){
//     new_prod_price.push(price+1)
// }
// console.log(new_prod_price)

// let new_prod_price=prod_price.map((price)=>{return price+1})
// console.log(new_prod_price)

let new_prod_price=prod_price.map(price=>price+1)
console.log(new_prod_price)