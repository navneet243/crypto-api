const axios = require('axios');
const CryptoCurrency = require('../models/cryptoModel')
const { CRYPTO_API_URL } = require('./constants')

const fetchCryptoData = async () => {
    try {
        const params = {
            ids: "bitcoin,matic-network,ethereum", 
            vs_currencies: "usd",
            include_market_cap: true,
            include_24hr_change: true,
          };
        
        const response = await axios.get(CRYPTO_API_URL, { params });

        if (response.status === 200) {
            const data = response.data;
            for (const [symbol, values] of Object.entries(data)) {
                await CryptoCurrency.findOneAndUpdate(
                  { symbol },
                  {
                    name: symbol.charAt(0).toUpperCase() + symbol.slice(1),
                    price_usd: values.usd,
                    market_cap_usd: values.usd_market_cap,
                    change_24h_usd: values.usd_24h_change.toFixed(1),
                    $push: {
                      priceHistory: {
                        $each: [{ price: values.usd, timestamp: new Date() }],
                        $slice: -100,
                      },
                    },
                    last_updated: new Date(),
                  },
                  { upsert: true }
                );
              }
              console.log("Cryptocurrency data updated successfully.");
        } 
        else {
            console.error("Failed to fetch cryptocurrency data:", response.status);
        }
    }
    catch (error) {
        console.error("Error fetching cryptocurrency data:", error.message);
    }
}

module.exports = fetchCryptoData;