const mongoose = require('mongoose');
const {MONGODB_URL} = require('./serverConfig');
const fetchCryptoData = require('../utils/fetchCryptoData');
require('../utils/scheduler')

module.exports = () => {
    mongoose
      .connect(MONGODB_URL)
      .then(() => {
        console.log('Mongodb connected');
        fetchCryptoData();
      })
      .catch(err => console.log(err.message));
  
    mongoose.connection.on('connected', () => {
      console.log('Mongoose connected to db');
    });
};
