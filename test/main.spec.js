const express = require('express');
const path = require('path');
// const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');
const Actions = require('nightmare-react-utils').Actions;

Nightmare.action(...Actions);

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8080);

// it("Links to work should work on Main Page", function(done){
// Request('http://localhost:8080', function(error, response, body)
//     expect(body).)}    )



const url = 'http://localhost:8080';






