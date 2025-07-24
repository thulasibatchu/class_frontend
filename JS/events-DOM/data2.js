let employees=[{"id":1,"name":"Buckie","salary":62},
{"id":2,"name":"Emanuel","salary":28},
{"id":3,"name":"Aleda","salary":63},
{"id":4,"name":"Sheree","salary":41},
{"id":5,"name":"Pip","salary":60},
{"id":6,"name":"Bobbette","salary":6},
{"id":7,"name":"Chelsae","salary":20},
{"id":8,"name":"Babb","salary":21},
{"id":9,"name":"Cleveland","salary":98},
{"id":10,"name":"Quintus","salary":32},
{"id":11,"name":"Berkie","salary":31},
{"id":12,"name":"Evania","salary":52},
{"id":13,"name":"Giffer","salary":39},
{"id":14,"name":"Lauryn","salary":81},
{"id":15,"name":"Dona","salary":55},
{"id":16,"name":"Alasteir","salary":56},
{"id":17,"name":"Nickie","salary":72},
{"id":18,"name":"Vassili","salary":58},
{"id":19,"name":"Roxie","salary":51},
{"id":20,"name":"Zane","salary":58},
{"id":21,"name":"Tobe","salary":14},
{"id":22,"name":"Augusto","salary":13},
{"id":23,"name":"Laura","salary":80},
{"id":24,"name":"Emmalyn","salary":69},
{"id":25,"name":"Quintus","salary":50},
{"id":26,"name":"Wylma","salary":26},
{"id":27,"name":"Lydie","salary":80},
{"id":28,"name":"Portie","salary":100},
{"id":29,"name":"Ware","salary":8},
{"id":30,"name":"Jarrid","salary":79},
{"id":31,"name":"Lianne","salary":88},
{"id":32,"name":"Darcee","salary":90},
{"id":33,"name":"Cristiano","salary":78},
{"id":34,"name":"Tammara","salary":16},
{"id":35,"name":"Ana","salary":32},
{"id":36,"name":"Pauletta","salary":1},
{"id":37,"name":"Sayre","salary":94},
{"id":38,"name":"Eadith","salary":83},
{"id":39,"name":"Jorgan","salary":4},
{"id":40,"name":"Heddi","salary":42},
{"id":41,"name":"Roger","salary":34},
{"id":42,"name":"Caron","salary":33},
{"id":43,"name":"Tersina","salary":88},
{"id":44,"name":"Joyous","salary":66},
{"id":45,"name":"Colene","salary":75},
{"id":46,"name":"Auberon","salary":84},
{"id":47,"name":"Maryjo","salary":2},
{"id":48,"name":"Conni","salary":24},
{"id":49,"name":"Mandy","salary":10},
{"id":50,"name":"Shaylah","salary":12},
{"id":51,"name":"Mendie","salary":91},
{"id":52,"name":"Ag","salary":61},
{"id":53,"name":"Aurilia","salary":81},
{"id":54,"name":"Wenda","salary":71},
{"id":55,"name":"Eleanore","salary":61},
{"id":56,"name":"Jodie","salary":66},
{"id":57,"name":"Rena","salary":61},
{"id":58,"name":"Lettie","salary":81},
{"id":59,"name":"Wildon","salary":68},
{"id":60,"name":"Sid","salary":4},
{"id":61,"name":"Betty","salary":8},
{"id":62,"name":"Doris","salary":81},
{"id":63,"name":"Nowell","salary":35},
{"id":64,"name":"Kari","salary":11},
{"id":65,"name":"Ree","salary":17},
{"id":66,"name":"Lars","salary":46},
{"id":67,"name":"Lexi","salary":3},
{"id":68,"name":"Alvin","salary":67},
{"id":69,"name":"Dur","salary":84},
{"id":70,"name":"Patrice","salary":92},
{"id":71,"name":"Livy","salary":1},
{"id":72,"name":"Kass","salary":62},
{"id":73,"name":"Sinclair","salary":23},
{"id":74,"name":"Yoshiko","salary":4},
{"id":75,"name":"Ezmeralda","salary":47},
{"id":76,"name":"Shelagh","salary":21},
{"id":77,"name":"Emanuele","salary":10},
{"id":78,"name":"Ashlee","salary":27},
{"id":79,"name":"Gabbey","salary":51},
{"id":80,"name":"Walt","salary":69},
{"id":81,"name":"Brig","salary":43},
{"id":82,"name":"Celestia","salary":15},
{"id":83,"name":"Miriam","salary":27},
{"id":84,"name":"Germain","salary":41},
{"id":85,"name":"Anastassia","salary":78},
{"id":86,"name":"Klara","salary":89},
{"id":87,"name":"Jeanna","salary":35},
{"id":88,"name":"Livvie","salary":38},
{"id":89,"name":"Shari","salary":41},
{"id":90,"name":"Cullen","salary":92},
{"id":91,"name":"Margarethe","salary":53},
{"id":92,"name":"Sosanna","salary":6},
{"id":93,"name":"Arty","salary":82},
{"id":94,"name":"Prisca","salary":29},
{"id":95,"name":"Gerrard","salary":68},
{"id":96,"name":"Jocelyn","salary":18},
{"id":97,"name":"Gennie","salary":12},
{"id":98,"name":"Gilberto","salary":41},
{"id":99,"name":"Corrie","salary":21},
{"id":100,"name":"Meris","salary":43}]

let display_data=()=>{
    let rows='';
    // for(let emp of employees){
    //     rows=rows+`
    //                 <tr>
    //                     <td>${emp.id}</td>
    //                     <td>${emp.name}</td>
    //                     <td>${emp.salary}</td> 
    //                 </tr>            
    //             `
    // }
    employees.map((emp)=>{
        rows=rows+`
                     <tr>
                         <td>${emp.id}</td>
                         <td>${emp.name}</td>
                         <td>${emp.salary}</td> 
                     </tr> 
                 `  
    })
    
    document.querySelector("#myTable tbody").innerHTML = rows;

  // Initialize DataTable AFTER data is loaded
  $('#myTable').DataTable();
};
