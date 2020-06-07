require('dotenv').config();

const app_name = 'HR backend'

const config = {
    app_name: app_name,
    port: process.env.PORT || 3000
};

module.exports = config;