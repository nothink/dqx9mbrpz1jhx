import * as functions from 'firebase-functions/v1'
import { App } from '@slack/bolt'
import { ChatPostMessageArguments } from '@slack/web-api'

const config = functions.config()
const logger = functions.logger

const boltApp = new App({
  token: config.slack.bot_token,
  signingSecret: config.slack.signing_secret,
  processBeforeResponse: true
})

const RESOURCE_CHANNEL_ID = 'C02FSAAA8AF'

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
    channel: RESOURCE_CHANNEL_ID,
    text: filepath
  }
  await chat.postMessage(arg)
  logger.info('media link: ', object.mediaLink)
  logger.info('self link: ', object.selfLink)
  logger.info('name: ', object.name)
}
