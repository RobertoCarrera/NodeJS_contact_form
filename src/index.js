const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, "public")));

app.listen(3500, () => {

    console.log("Server working on port 3500");
});