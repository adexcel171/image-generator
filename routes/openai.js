
const express = require('express');
const router= express.Router();
const {generateImage} = require('../controller/openaiControllers');
 





router.post('/generateimage', generateImage)







module.exports= router