const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/tomicroservices-frontend'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/tomicroservices-frontend/index.html');
})

app.listen(process.env.PORT);