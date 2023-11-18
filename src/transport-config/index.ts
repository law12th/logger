import dotenv from 'dotenv'
import * as winston from 'winston'
import { TransportTypes } from '../transport-types'
import { type Transport } from '../transports'
import { DATE_FORMAT } from '../utils/constants'

dotenv.config()

const transports: Transport[] = [
  {
    type: TransportTypes.FILE,
    options: {
      filename: 'all-%DATE%.log',
      dirname: './.logs',
      level: 'http',
      datePattern: DATE_FORMAT,
      format: winston.format.json(),
      maxFiles: '30d'
    }
  },
  {
    type: TransportTypes.FILE,
    options: {
      filename: 'error-%DATE%.log',
      dirname: './.logs',
      level: 'error',
      datePattern: DATE_FORMAT,
      format: winston.format.json(),
      maxFiles: '30d'
    }
  }
]

const consoleTransportConfig: Transport = {
  type: TransportTypes.CONSOLE,
  options: {
    level: 'debug'
  }
}

if (process.env.NODE_ENV !== 'production') {
  transports.push(consoleTransportConfig)
}

export { transports }
