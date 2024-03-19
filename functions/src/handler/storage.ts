import * as functions from 'firebase-functions/v1'
// import { StorageEvent } from 'firebase-functions/v2/storage'

import { App } from '@slack/bolt'
import { ChatPostMessageArguments } from '@slack/web-api'

import { FunctionInfo, Logger } from '../globals'

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
export const notifyV1Handler = async (
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

// export const notifyV2Handler = (event: StorageEvent) => {
//   const filepath = `https://storage.googleapis.com/${event.data.bucket}/${event.data.name}`
//   const chat = boltApp.client.chat
//   const arg: ChatPostMessageArguments = {
//     channel: FunctionInfo.RESOURCE_CHANNEL_ID,
//     text: filepath
//   }
//   chat.postMessage(arg)
//   Logger.info('fetched file: ', filepath)
// }
