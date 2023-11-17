/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as winston from 'winston'
import { type Transport } from './transports'
import {
  Colours,
  DATE_FORMAT,
  LoggingLevels,
  TIME_FORMAT
} from './utils/constants'
import { createTransports } from './transport-creators'
import dotenv from 'dotenv'

dotenv.config()

const colours = {
  error: Colours.RED,
  warn: Colours.YELLOW,
  info: Colours.BLUE,
  http: Colours.MAGENTA,
  debug: Colours.WHITE
}

winston.addColors(colours)

const levels = {
  error: LoggingLevels.ERROR,
  warn: LoggingLevels.WARN,
  info: LoggingLevels.INFO,
  http: LoggingLevels.HTTP,
  debug: LoggingLevels.DEBUG
}

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
    level: process.env.LOG_LEVEL ?? 'http',
    format
  })
}
