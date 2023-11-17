import dotenv from 'dotenv'
import { TransportTypes } from '../transport-types'
import { type Transport } from '../transports'
import { DATE_FORMAT } from '../utils/constants'

dotenv.config()

export const transports: Transport[] = [
  {
    type: TransportTypes.CONSOLE,
    options: {
      level: 'info'
    }
  },
  {
    type: TransportTypes.FILE,
    options: {
      filename: 'all-%DATE%.log',
      dirname: './.logs',
      level: 'all',
      datePattern: DATE_FORMAT
    }
  },
  {
    type: TransportTypes.FILE,
    options: {
      filename: 'error-%DATE%.log',
      dirname: './.logs',
      level: 'error',
      datePattern: DATE_FORMAT
    }
  }
]
