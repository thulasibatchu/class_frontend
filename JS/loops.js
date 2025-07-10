//for loop

// for(let i=1;i<=10;i++){
//     console.log(i)
// }

//while loop

// let i=1
// while(i<=10){
//     console.log(i)
//     i++
// }

//do-while
// let i=1
// do{
//    console.log(i) 
//    i++
// }while(i<=10)

//for of
// let nums=[1,2,3,4,5,6,7,8,9,10]
// for(let num of nums){
//     console.log(num)
// }

//for-in (used only for objects)

let emp={
    eid:101,
    ename:'rahul',
    gender:'Male'
}

for(prop in emp){
    // console.log(emp.eid)
    console.log(emp[prop])
}