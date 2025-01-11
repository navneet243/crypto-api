const cron = require("node-cron");
const fetchCryptoData = require("./fetchCryptoData");

// Schedule the job to run every 2 hours
cron.schedule("0 */2 * * *", async () => {
  console.log("Fetching cryptocurrency data...");
  await fetchCryptoData();
});

