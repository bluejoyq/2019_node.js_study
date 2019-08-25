const express = require('express');
const app = express();
const session=require('express-session');
const bodyParser=require('body-parser');

app.use(express.static(__dirname+'/static'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}));

app.get('/',(req,res)=>{
    res.redirect('/signup.html');
});

// user id and pw array
let users = new Array();


app.post('/signup',(req,res)=>{
    let user = {
        'id':req.body.userId, 
        'pw':req.body.password,
        'name':req.body.name,
        'major':req.body.major
    };

    let check = true;
    for(elem of users){
        if(elem.id == user.id){
            check = false;
            break;
        }
    }

    if(check){
        users.push(user);
        res.redirect('/login.html');
    }
    else{
        res.send('User already exists. Try again');
    }
});

app.post('/login',(req,res)=>{
    const tempId = req.body.userId;
    const tempPW = req.body.password;

    let check = 0;
    for(let elem of users){
        if(elem.id == tempId){
            check = 1;
            if(elem.pw == tempPW){
                check = 2;
                break;
            }
            break;
        }
    }

    switch(check){
        case 0:
            res.send('ID wrong');
            break;
        case 1:
            res.send('Password wrong');
            break;
        case 2:
            req.session.userId = tempId;
            res.redirect('/profile');
            break;
    }
});

app.get('/profile',(req,res)=>{
    let user = new Object();
    if(!req.session.userId){
        res.send('session error');
    }
    else{
        for(elem of users){
            if(elem.id == req.session.userId){
                user.id = elem.id;
                user.name = elem.name;
                user.major = elem.major;
            }
        }
        res.json(user);
    }
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000!');
});