const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

const allowedIp = process.env.ALLOWED_IP;

const corsOptions = {

    origin: function (origin, callback) {
        
        if (origin && origin.includes(allowedIp)) {
            
            callback(null, true);
        } else {
        
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));
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