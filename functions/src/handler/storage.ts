import { FunctionInfo, Logger } from '../globals'
import { App } from '@slack/bolt'
import { ChatPostMessageArguments } from '@slack/web-api'
import * as functions from 'firebase-functions/v1'

const config = functions.config()

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
    channel: FunctionInfo.RESOURCE_CHANNEL_ID,
    text: filepath
  }
  await chat.postMessage(arg)
  Logger.info('fetched file: ', filepath)
}
