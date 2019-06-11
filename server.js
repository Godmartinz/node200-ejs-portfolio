const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
var profile= require ('./profile');

app.use('./profile', profile);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './views');

app.set('view engine', 'ejs');

app.get('/contact', (req,res) =>{
    res.render('contact');
});

app.post('/thanks', (req,res) =>{
    res.render('thanks', {contact:req.body})
});
app.get('/', (req,res)=>{
    const data= {
        person:{
            firstName: 'Godfrey',
            lastName: "Martinez",
        }
    }
    res.render('index', data);
    
});
app.listen(8080, () =>{
    console.log('listening at http://localhost:8080');
});