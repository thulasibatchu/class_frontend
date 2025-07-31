let employees=[{eid:101,ename:'rahul',esal:45000},
                {eid:102,ename:'sonia',esal:55000}
]

let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback();
    },4000)
}
let getEmployee=()=>{
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
createEmployee({eid:103,ename:'priya',esal:65000},getEmployee)
//getEmployee()