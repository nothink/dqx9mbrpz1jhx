import * as functions from 'firebase-functions/v1'

/**
 * Global logger
 */
export const Logger = functions.logger

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

  // instance specifics
  static readonly MEMORY = '256MB'
  static readonly TIMEOUT = 540
}
