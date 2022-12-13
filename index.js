const express = require("express");
const dotenv = require('dotenv').config()
const app = express();
const port = process.env.PORT|| 5000;

//enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.use('/openai', require('./routes/openai'));




app.listen( port, () => {
    console.log(`server is working on ${port }`)
})