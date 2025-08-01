let employees=[{eid:101,ename:'rahul',esal:45000},
                {eid:102,ename:'sonia',esal:55000}]
let createEmployees=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let db_status=false;
            db_status===true?resolve("data inserted"):reject("failed");
            employees.push(emp);
        },4000);
    });
}
let getEmployees=()=>{
    setTimeout(()=>{
        let rows=""
       for(let emp of employees){
           rows=rows+`
                         <tr>
                            <td>${emp.eid}</td>
                            <td>${emp.ename}</td>
                            <td>${emp.esal}</td>
                         </tr>
                     `
       }
       document.getElementById('table_data').innerHTML=rows;
    },2000)
}
// createEmployees({eid:103,ename:'priya',esal:65000})
//     .then((resp)=>{console.log(resp)})
//     .catch((err)=>{console.log(err)})
// getEmployees();

let execute=()=>{
    createEmployees({eid:103,ename:'priya',esal:65000})
    getEmployees();
}
execute()

