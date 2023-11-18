/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import dotenv from 'dotenv'
import * as winston from 'winston'
import { createTransports } from './transport-creators'
import { type Transport } from './transports'
import {
  DATE_FORMAT,
  TIME_FORMAT,
  logLevels as levels,
  logColours
} from './utils/constants'

dotenv.config()

const level = process.env.NODE_ENV !== 'production' ? 'debug' : 'info'

winston.addColors(logColours)

const format = winston.format.combine(
  winston.format.timestamp({ format: `${DATE_FORMAT} ${TIME_FORMAT}` }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
)

export const createLogger = (transports: Transport[]): winston.Logger => {
  return winston.createLogger({
    transports: createTransports(transports),
    levels,
    level,
    format
  })
}
