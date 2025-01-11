const express = require('express');
const {PORT} = require('./config/serverConfig');
const ApiRoutes = require("./router/index")

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api',ApiRoutes);
require('./config/db')();

app.listen(PORT, ()=> {
    console.log(`Server running at ${PORT}`)
})