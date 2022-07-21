const express = require('express')
const cors = require('cors')
const chalk = require('chalk')
const path = require('path')
const config = require('config')
const routes = require('./routes')

const app = express()
const PORT = config.get('port') ?? 8080

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1', routes)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client')))
  const indexPath = path.join(__dirname, 'client', 'index.html')
  app.get('*', (req, res) => {
    res.sendFile(indexPath)
  })
  console.log(chalk.red('Production'))
} else {
  console.log(chalk.blue('Development'))
}

async function start() {
  try {
    // join mongoose --> await mongoose.connect()
    app.listen(PORT, () => console.log(chalk.green.inverse(`Server start on port: ${PORT}...`)))
  } catch(error) {
    console.log(chalk.red(error.message))
    process.exit(1)
  }
}

start()
