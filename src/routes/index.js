const express = require('express');
const route = express.Router();
const { getByZip, addZip } = require('../controllers/index');


route.get('/getByZipCode/:cp', getByZip);
route.post('/addZipCode', addZip)

module.exports = route;