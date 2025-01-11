const CryptoService = require('../services/cryptoService')

const cryptoservice = new CryptoService()

const getStats = async (req,res) => {
    try {
        const {coin} = req.query;
        if(!coin || !['bitcoin','matic-network','ethereum'].includes(coin)){
            return res.status(400).json({
                success: false,
                message: "Missing parameter, must be bitcoin, matic-network, ethereum",
                err: "Invalid or missing coin"
            })
        }
        const stats = await cryptoservice.getStatsBySymbol(coin);
        return res.status(200).json({
            price: stats.price_usd,
            marketCap: stats.market_cap_usd,
            "24hChange": stats.change_24h_usd,
        })
    } catch (error) {
        console.error("Error fetching stats:", error.message);
        return res.status(501).json({
            data:{},
            success: false,
            message: "not able to fetch stats",
            err: error
        })
    }
}

const getDeviation = async (req,res) => {
    try {
        const {coin} = req.query;

        if(!coin || !["bitcoin","matic-network", "ethereum"].includes(coin)) {
            return res.status(400).json({
                success: false,
                message: "Missing parameter, must be bitcoin, matic-network, ethereum",
                err: "Invalid or missing coin"
            });
        }
    
        const deviation = await cryptoservice.getDeviationOfLast100Entries(coin);
        return res.status(200).json({ deviation });
    } catch (error) {
        console.error("Error calculating price deviation:", error.message);
        return res.status(501).json({
            data:{},
            success: false,
            message: "not able to calculate deviation",
            err: error
        })
    }
}

module.exports = {getStats, getDeviation}