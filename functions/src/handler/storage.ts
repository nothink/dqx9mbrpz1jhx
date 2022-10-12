import * as functions from 'firebase-functions/v1'
import { App } from '@slack/bolt'
import { ChatPostMessageArguments } from '@slack/web-api'

import { Info } from '../info'

const config = functions.config()
const logger = functions.logger

const boltApp = new App({
  token: config.slack.bot_token,
  signingSecret: config.slack.signing_secret,
  processBeforeResponse: true
})

/**
 * Cloud Storage Handler
 * @param object Object Metadata
 */
export const notifyHandler = async (
  object: functions.storage.ObjectMetadata
) => {
  const filepath = `https://storage.googleapis.com/${object.bucket}/${object.name}`
  const chat = boltApp.client.chat
  const arg: ChatPostMessageArguments = {
    channel: Info.RESOURCE_CHANNEL_ID,
    text: filepath
  }
  await chat.postMessage(arg)
  logger.info('fetched file: ', filepath)
}
