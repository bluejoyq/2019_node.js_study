const fs = require('fs');
const calc = require('./opr');

fs.readFile('./4_module/input.txt',(err,data)=>{
    if (err) throw err;
    let str = (data.toString()).split(',');
    str[0] = Number(str[0]);
    str[2] = Number(str[2]);
    let content;
    if (str[1] =="+") {content = calc.add(str[0],str[2]);}
    if (str[1] =="-") {content = calc.subtract(str[0],str[2]);}
    if (str[1] =="*") {content = calc.multiply(str[0],str[2]);}
    if (str[1] =="/") {content = calc.divide(str[0],str[2]);}
    fs.writeFile('./4_module/output.txt',content,(err)=>{
        if(err) throw err;
    });
});
