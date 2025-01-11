const CryptoRepository = require('../repository/cryptoRepository')

class CryptoService{
    constructor(){
        this.cryptoRepository = new CryptoRepository();
    }

    async getStatsBySymbol(symbol){
        try {
            const response = await this.cryptoRepository.getBySymbol(symbol);
            return response;
        } catch (error) {
            console.log("Something went wrong in CryptoService Layer",error);
        }
    }

    async getDeviationOfLast100Entries(symbol){
        try {
            const prices = await this.cryptoRepository.getLast100Entries(symbol);
            if (!prices || prices.length === 0) {
                throw new Error(`No price records found for coin: ${symbol}`);
            }
            const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
            const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
            const standardDeviation = Math.sqrt(variance);

            return parseFloat(standardDeviation.toFixed(2));
        } catch (error) {
            console.log("Something went wrong in CryptoService Layer",error);
        }
    }
}

module.exports = CryptoService;