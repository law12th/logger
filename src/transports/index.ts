import { type DailyRotateFileTransportOptions } from 'winston-daily-rotate-file'
import { type SlackHookOptions } from 'winston-slack-webhook-transport'
import { type ConsoleTransportOptions } from 'winston/lib/winston/transports'
import { type TransportTypes } from '../transport-types'

interface ConsoleTransport {
  type: TransportTypes.CONSOLE
  options: ConsoleTransportOptions
}

interface FileTransport {
  type: TransportTypes.FILE
  options: DailyRotateFileTransportOptions
}

interface SlackTransport {
  type: TransportTypes.SLACK
  options: SlackHookOptions
}

export type Transport = ConsoleTransport | FileTransport | SlackTransport
