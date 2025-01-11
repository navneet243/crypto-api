const express = require('express');
const {PORT} = require('./config/serverConfig');

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

require('./config/db')();

app.listen(PORT, ()=> {
    console.log(`Server running at ${PORT}`)
})