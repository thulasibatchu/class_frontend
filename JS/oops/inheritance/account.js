class Account{
    acc_name;acc_mobile;acc_address;
    constructor(name,address,mobile){
       this.acc_name=name;
       this.acc_address=address;
       this.acc_mobile=mobile;

    }
    update_address(){}
    update_mobile(){}
}
class Sa extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=500;
    constructor(id,name,address,mobile,amount){
        super(name,address,mobile);
        this.acc_Id=id;
        this.acc_Bal=amount;
    }
    
    open_account(){}
    deposit_amount(amount){}
    withdrawl(amount){}
    get_bal(){}
}
class Ca extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=500
    open_account(){}
    deposit_amount(amount){}
    withdrawl(amount){}
    get_bal(){}
}

let sa1=new Sa(101,'rahul','wayanad',918765432,5000)
// let ca1=new Ca(102,'Sonia','Delhi',9187654546,50000)
console.log(sa1)

