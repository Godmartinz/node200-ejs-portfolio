const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
var profile= require ('./profile');
express.static('public');

app.use(express.static('public'));
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

app.post('/sms', (req,res)=>{
    const twiml = new MessagingResponse();
    twiml.message('I wont see this txt, email me at godmartinz@gmail.com');
    
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
})
app.listen(8080, () =>{
    console.log('listening at http://localhost:8080');
});