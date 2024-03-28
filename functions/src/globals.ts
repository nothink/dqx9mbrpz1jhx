import { type GlobalOptions, logger } from 'firebase-functions/v2'

/**
 * Global logger
 */
export const Logger = logger

/** bucket name */
export const BUCKET_NAME = 'dqx9mbrpz1jhx'

/** Slack resource channnel ID for send notifications to */
export const RESOURCE_CHANNEL_ID = 'C02FSAAA8AF'

/**
 * v2 global options.
 */
export const Options: GlobalOptions = {
  region: 'asia-northeast1',
  memory: '128MiB',
  timeoutSeconds: 240,
  maxInstances: 2,
}
