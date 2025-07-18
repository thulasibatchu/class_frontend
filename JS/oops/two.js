class Account{
    acc_Id=101;
    open_Account(){
        console.log('account opened')
    }
}
var a1=new Account();
var a2=new Account();

console.log(a1.acc_Id)
console.log(a2)
a1.open_Account();