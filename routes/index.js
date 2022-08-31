const router = require('express').Router()
const sellingRoute = require('./sellingRoute')

router.use('/selling', sellingRoute)

module.exports = router;