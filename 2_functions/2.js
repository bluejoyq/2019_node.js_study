const list=[1,2,3,4,5,6,7,8,9,10];

const callbackExample=(items,callback)=>{
    setTimeout(
        ()=>{callback(items.reduce((a,b)=>(a+b)));}
,0);
};
callbackExample(list,(result)=>{console.log(result);});
<<<<<<< HEAD
console.log('first'); 
=======
console.log('first'); 

>>>>>>> ca1ec1ba76da70302122d49c5458f3648359edb0
