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

export const createSlackTransport = (options: SlackHookOptions): SlackHook => {
  return new SlackHook(options)
}
