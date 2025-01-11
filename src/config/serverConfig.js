const dotenv = require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 6000,
    MONGODB_URL: process.env.MONGODB_URL
}