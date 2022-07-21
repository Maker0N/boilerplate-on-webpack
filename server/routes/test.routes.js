const express = require('express')
const chalk = require('chalk')

const router = express.Router({ mergeParams: true})

router.get('/', (req, res) => {
  try {
    res.send(console.log(chalk.red.inverse('Boilerplate run!')))
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
