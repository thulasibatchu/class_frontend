let gotoGoa=(success,failure)=>{
    let acc_bal=25000
    acc_bal>20000?success("go&enjoy"):failure("try next month")
}
gotoGoa((resp)=>{console.log(resp)},(err)=>{console.log(err)})