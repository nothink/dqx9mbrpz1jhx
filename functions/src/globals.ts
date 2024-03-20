import { GlobalOptions, logger } from 'firebase-functions/v2'

/**
 * Global logger
 */
export const Logger = logger

/**
 * Global variables for this Cloud Functions
 */
export class FunctionInfo {
  // system specifics
  /** specific system name */
  static readonly NAME = 'dqx9mbrpz1jhx'
  /** bucket name */
  static readonly BUCKET_NAME = this.NAME
  /** Slack resource channnel ID for send notifications to */
  static readonly RESOURCE_CHANNEL_ID = 'C02FSAAA8AF'
}

/**
 * v2 global options.
 */
export const Options: GlobalOptions = {
  region: 'asia-northeast1',
  memory: '128MiB',
  timeoutSeconds: 240,
  maxInstances: 2
}
