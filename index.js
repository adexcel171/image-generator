const path = require('path')
const express = require("express");
const dotenv = require('dotenv').config()
const app = express();
const port = process.env.PORT|| 5000;

//enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use('/openai', require('./routes/openai'));




app.listen( port, () => {
    console.log(`server is working on ${port }`)
})