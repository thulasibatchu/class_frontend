// function add(a,b){
//     console.log(a+b)

// }
// add(10,20)

//fat-arrow

// let add=(a,b)=>{
//     console.log(a+b)
// }
// add(1,2)
// add(1)

// let add=(a,b)=>a+b;
// let r1=add(1,2)
// console.log(r1)
// let r2=add('rahul',100)
// console.log(r2)
// let r3=add(10)
// console.log(r3)

// let wish=ename=>"Hello Mr."+ename;
// let msg=wish("rahul")
// console.log(msg)

// function wish(ename){
//     return "Hello Mr"+ename;
// }
// let msg=wish("rahul")
// console.log(msg)

// let wish=(ename)=>{
//     return "Hello Mr."+ename
// }
// let msg=wish("rahul")
// console.log(msg)
// console.log(wish("sonia"))

// function greet(){
//     console.log(this)
// }

// function wish(){
//     console.log('gm')
// }
// wish()

// function wish(){
//     console.log('gn')
// }
// wish()


var wish=()=>{
    console.log('gm')
}
wish()
var wish=()=>{
    console.log('gn')
}
wish()


