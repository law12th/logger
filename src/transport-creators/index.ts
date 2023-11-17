/* eslint-disable array-callback-return */
import DailyRotateFile, {
  type DailyRotateFileTransportOptions
} from 'winston-daily-rotate-file'
import SlackHook, {
  type SlackHookOptions
} from 'winston-slack-webhook-transport'
import {
  Console,
  type ConsoleTransportInstance,
  type ConsoleTransportOptions
} from 'winston/lib/winston/transports'
import { TransportTypes } from '../transport-types'
import { type Transport } from '../transports'

const createConsoleTransport = (
  options: ConsoleTransportOptions
): ConsoleTransportInstance => {
  return new Console(options)
}

const createFileTransport = (
  options: DailyRotateFileTransportOptions
): DailyRotateFile => {
  return new DailyRotateFile(options)
}

const createSlackTransport = (options: SlackHookOptions): SlackHook => {
  return new SlackHook(options)
}

export const createTransports = (
  transports: Transport[]
): Array<DailyRotateFile | ConsoleTransportInstance | SlackHook> => {
  return transports.map(({ type, options }) => {
    switch (type) {
      case TransportTypes.CONSOLE:
        return createConsoleTransport(options)
      case TransportTypes.FILE:
        return createFileTransport(options)
      case TransportTypes.SLACK:
        return createSlackTransport(options)
    }
  })
}
