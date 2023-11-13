/* eslint-disable array-callback-return */
import type DailyRotateFile from 'winston-daily-rotate-file'
import { type ConsoleTransportInstance } from 'winston/lib/winston/transports'
import {
  createConsoleTransport,
  createFileTransport
} from '../transport-creators'
import { TransportTypes } from '../transport-types'
import { type Transport } from '../transports'

export const getLoggerTransports = (
  transportsConfig: Transport[]
): Array<DailyRotateFile | ConsoleTransportInstance> => {
  return transportsConfig.map(({ type, options }) => {
    switch (type) {
      case TransportTypes.CONSOLE:
        return createConsoleTransport(options)
      case TransportTypes.FILE:
        return createFileTransport(options)
    }
  })
}
