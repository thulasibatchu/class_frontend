/*let eids=[101,102,103,104]
//create new array
// let uids=[...eids]
// console.log(uids)
let uids=eids.map(eid=>eid)
// for(let i=0;i<eids.length;i++){
//    uids.push(eids[i]);
// }

// for(let eid of eids){
//     uids.push(eid)
// }
console.log(uids)
*/
//merge array
/*
let a=[10,10,20,30]
let b=[10,20,30]
let c=[...a,...b]
// console.log(c)
//extend arrays
let d=[...a,40,50,60]
console.log(d)
*/

//objects
let emp={
    eid:101,
    ename:'rahul',
    email:'rahul@tcs.com',
    avail:'true'
}
let details={
    email:'rahul@gmail.com',
    eloc:'wayanad'

}
let emp_details={...emp,...details}
console.log(emp_details)
