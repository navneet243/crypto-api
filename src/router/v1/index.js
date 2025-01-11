const router = require('express').Router();
const { getStats } = require('../../controller/cryptoController');

router.get('/stats', getStats)

module.exports = router;