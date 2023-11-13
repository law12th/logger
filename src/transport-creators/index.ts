import DailyRotateFile, {
  type DailyRotateFileTransportOptions
} from 'winston-daily-rotate-file'
import {
  Console,
  type ConsoleTransportInstance,
  type ConsoleTransportOptions
} from 'winston/lib/winston/transports'

export const createConsoleTransport = (
  options: ConsoleTransportOptions
): ConsoleTransportInstance => {
  return new Console(options)
}

export const createFileTransport = (
  options: DailyRotateFileTransportOptions
): DailyRotateFile => {
  return new DailyRotateFile(options)
}
