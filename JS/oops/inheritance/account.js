class Account{
    acc_name;acc_mobile;acc_address;
    constructor(name,address,mobile){
       this.acc_name=name;
       this.acc_address=address;
       this.acc_mobile=mobile;

    }
    update_address(address){}
    update_mobile(mobile){}
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
    deposit_amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }
    withdrawl(amount){
        this.acc_Bal=this.acc_Bal-amount;
    }
    get_bal(){
        return this.acc_Bal-this.min_Bal;
    }
}
class Ca extends Account{
    acc_Id;
    acc_Bal;
    min_Bal=5000;
    
    constructor(id,name,address,mobile,amount){
        super(name,address,mobile);
        this.acc_Id=id;
        this.acc_Bal=amount;
    }

    deposit_amount(amount){
        this.acc_Bal=this.acc_Bal+amount;
    }
    withdrawl(amount){
       this.acc_Bal=this.acc_Bal-amount; 
    }
    get_bal(){
        return this.acc_Bal-this.min_Bal;
    }
}

let sa1=new Sa(101,'rahul','wayanad',918765432,5000)
let ca1=new Ca(102,'Sonia','Delhi',9187654546,50000)
// console.log(sa1)
// console.log(ca1)

// sa1.deposit_amount(100)
// sa1.withdrawl(2000)
// console.log(sa1)
// console.log(sa1.get_bal())

ca1.withdrawl(4000)
console.log(ca1)
console.log(ca1.get_bal())