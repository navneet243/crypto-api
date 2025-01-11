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
}

module.exports = CryptoService;