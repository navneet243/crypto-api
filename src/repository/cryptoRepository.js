const CryptoCurrency = require('../models/cryptoModel');

class CryptoRepository{
    async getBySymbol(symbol){
        try {
            const currency = await CryptoCurrency.findOne({symbol});
            return currency;
        } catch (error) {
            console.log("CryptoRepository: Unable to find currency", error);
        }
    }

    async getLast100Entries(symbol){
        try {
            const currency = await CryptoCurrency.findOne({symbol}, {priceHistory: {$slice: -100}});
            return currency ? currency.priceHistory.map((entry) => entry.price) : [];
        } catch (error) {
            console.log("CryptoRepository: Entries not found", error);
        }
    }
}

module.exports= CryptoRepository;