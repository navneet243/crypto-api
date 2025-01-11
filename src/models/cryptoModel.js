const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    symbol: {type: String, required: true},
    price_usd: {type: Number, required: true},
    market_cap_usd: {type: Number, required: true},
    change_24h_usd: { type: Number, required: true },
    priceHistory: [
        {
          price: {type: Number, required: true},
          timestamp: {type: Date, default: Date.now},
        },
    ],
    last_updated: { type: Date, default: Date.now },
})

module.exports= mongoose.model("CryptoCurrency", cryptoSchema);

