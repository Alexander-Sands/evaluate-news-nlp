const dotenv = require('dotenv');
dotenv.config();

let theDate = new Date();
let newDate = theDate.getMonth()+'.'+ theDate.getDate()+'.'+ theDate.getFullYear();

let json = {
    'title': 'evaluate-news-nlp',
    'message': 'this is a message',
    'time': newDate,
    'myKey': process.env.API_KEY
}

module.exports = json
