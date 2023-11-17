import axios from 'axios'
import express from 'express'
import { LoggerFactory } from './logger-factory'
import { morganMiddleware } from './morgan-middleware'

const logger = LoggerFactory.getLogger()

const app = express()

app.use(morganMiddleware)

app.get('/crypto', async (_req, res) => {
  try {
    const response = await axios.get(
      'https://api2.binance.com/api/v3/ticker/24hr'
    )

    const tickerPrice = response.data

    res.json(tickerPrice)
  } catch (err) {
    logger.error(err)

    res.status(500).json({ error: 'internal server error' })
  }
})

app
  .listen('3000', () => {
    logger.info('listening on port 3000')
  })
  .on('error', (err) => {
    logger.error(`server failed: ${err}`)
  })
