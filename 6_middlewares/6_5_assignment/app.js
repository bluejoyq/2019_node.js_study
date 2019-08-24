const express=require('express');
const app=express();
const bodyParser=require('body-parser');

let option = {
    index: "signup.html"
};

app.use(express.static(__dirname+'/public',option));
app.use(bodyParser.urlencoded({extended:true}));

let users = new Array();

app.post('/signup',function(req,res){
    let user = new Object();
    let tempID = req.body.userId;
    let tempPW = req.body.password;
    let check = true;

    console.log(tempID);
    for(let elem of users){
        if(elem.id == tempID){
            check = false;
        }
    }
    if(check != true){
        res.send('User already exists');
    }
    else {
        user.id = tempID;
        user.pw = tempPW;
        users.push(user);
        res.redirect('/login.html');
    }
});

app.post('/login',function(req,res){
    let tempID = req.body.userId;
    let tempPW = req.body.password;
    let error = 0;
    for(let elem of users){
        console.log(elem);
        if(elem.id == tempID){
            error = 1;
            if(elem.pw == tempPW){
                error = 2;
                break;
            }
            break;
        }
    }
    switch(error){
        case 0:
            res.send('ID wrong');
            break;
        case 1:
            res.send('Password wrong');
            break;
        case 2:
            res.send("Welcome "+tempID+"!");
            break;
    }
});


app.listen(3000,()=>{
    console.log('Server is running on port 3000!');
});
