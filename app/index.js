// require modules
const express = require('express');
const app = express();

const mongoose = require('../db');
// import packages
const config = require('./config/config');
const router = require('./route/index');

app.use('/', router);
app.get('/', (req, res) => {
    res.send('HR backend application base url');
})

app.listen(config.port, () => {
    console.log(`${config.app_name} is listening on port: ${config.port}`)
});