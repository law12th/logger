/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-extraneous-class */
import type * as winston from 'winston'
import { createLogger } from './logger'
import { transports } from './transport-config'

export class LoggerFactory {
  private static logger: winston.Logger

  static getLogger(): winston.Logger {
    if (!LoggerFactory.logger) {
      LoggerFactory.logger = createLogger(transports)
    }

    return LoggerFactory.logger
  }
}
