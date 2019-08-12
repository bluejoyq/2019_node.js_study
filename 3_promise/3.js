let address="";

const original_country=(addr)=>{
    addr+="대한민국 ";
    const province=(addr)=>{
        addr+="경상남도 ";
        const city=(addr)=>{
            addr+="거제시 ";
            console.log("original : "+addr);
        }
        return city(addr);
    }
    return province(addr);
}

const promise_country=new Promise((resolve)=>{
    resolve("대한민국 ");
}).then((addr)=>{
    return addr +"경상남도 ";
}).then((addr)=>{
    return addr + "거제시 ";
}).then((addr)=>{
    console.log("promise : " + addr);
})

const _country=(addr)=>{
    return new Promise((resolve,reject)=>{
        resolve(addr + "대한민국 ");
    })
}

const _province=(addr)=>{
    return new Promise((resolve,reject)=>{
        resolve(addr + "경상남도 ");
    })
}

const _city=(addr)=>{
    return new Promise((resolve,reject)=>{
        resolve(addr + "거제시 ");
    })
}

const async_country=async(addr)=>{
    try{
        let country = await _country(addr);
        let province = await _province(country);
        let city = await _city(province);
        console.log("async : " + city);
    }
    catch(err){
        console.error(err);
    }
}

original_country(address);
 // original : 대한민국 경기도 용인시

 promise_country;

 address = "";
 
 async_country(address);