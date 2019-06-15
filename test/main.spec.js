const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');
const Actions = require('nightmare-react-utils').Actions;

Nightmare.action(...Actions);

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8080);

const url = 'http://localhost:8080';

describe('Portfolio', function main(){
    this.timeout(12000);
    this.slow(4000);

    beforeEach(()=>{
        nightmare=new Nightmare();
    })
});
it("should load succesfully", () => axios.get(url).then(r => expect(r.status===200)));




