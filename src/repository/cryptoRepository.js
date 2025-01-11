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
}

module.exports= CryptoRepository;