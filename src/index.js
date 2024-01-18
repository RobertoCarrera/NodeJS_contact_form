const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

const corsOptions = {

    origin: 'http://localhost:3500',
    credentials: true,
};

app.use(cors(corsOptions));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3500");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, "public")));

app.get('', (req, res) => {
    res.json({ message: 'Hola, mundo!' });
});

app.listen(3500, () => {
    console.log("Server working on port 3500");
});
