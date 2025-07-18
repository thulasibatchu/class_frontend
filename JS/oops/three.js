class Account{
    open_Account(){
        console.log('account opened successfully')
    }
    deposit_Amount(){
        console.log('Amount deposited successfully')
    }
    withdrawl(){
        console.log('insufficient balance')
    }
    get_Bal(){
        console.log('server busy')
    }
    close_Account(){
        console.log('bal is -ve deposit more')
    }
}
let a1=new Account()
let a2=new Account()

a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.close_Account()