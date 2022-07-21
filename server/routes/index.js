const express = require('express')

const router = express.Router({ mergeParams: true})

router.use('/', require('./test.routes'))

module.exports = router
