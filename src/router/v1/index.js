const router = require('express').Router();
const { getStats, getDeviation } = require('../../controller/cryptoController');

router.get('/stats', getStats)
router.get('/deviation', getDeviation)

module.exports = router;