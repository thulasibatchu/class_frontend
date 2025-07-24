class Parent{
    pname;
    constructor(pname){
        this.pname=pname;
    }
}
class Child extends Parent{
    cname;
    constructor(cname,pname){
        super(pname);
        this.cname=cname
    }
}
let c1=new Child('rahul','rajiv',22)
console.log(c1)

// class Parent{
//     constructor(){
//         console.log('parent class')
//     }

// }
// class Child extends Parent{
//     constructor(){
//         super();
//         console.log('child class')
//     }
// }
// new Child()