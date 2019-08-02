function foo(a, b, callback)
{
    console.log("i'm foo(), a:%s, b:%s", a, b);
    callback('success call foo()');
}

foo(1, 2, function(msg){
    console.log(msg);
});