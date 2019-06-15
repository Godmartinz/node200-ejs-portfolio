const accountSid = 'AC9d764dba497db03ca51798316fe5d914';
const authToken = '2e353c4eef0f6ff9415602f12f4d3323';

const client = require('twilio')(accountSid, authToken);

client.messages
.create({
    body: "Thanks for reaching out, I will get back to you shortly.",
    from: '+16197623455',
    to: document.getElementById('phone')
    
})
