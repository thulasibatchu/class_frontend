// class Test{
//     a;
//     b;
//     c;
//     m1(){}
// }
// var t1=new Test()
// console.log(t1)

class Account{
    open_Account(){
        console.log('account opened')
    }
    deposit_Amount(amount){
        console.log('amount deposited:',amount)
    }
}
var a1= new Account()
a1.open_Account()
a1.deposit_Amount(5000)