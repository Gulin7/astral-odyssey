require('dotenv').config();

const express = require('express');

//express app
const app = express();

app.get('/', (request, response) => {
    response.json({mssg: 'Welcome to the app'});
});

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('Server started on port ' + process.env.PORT);
});
