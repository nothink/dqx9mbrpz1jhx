import { StorageEvent } from 'firebase-functions/v2/storage'
import { defineString } from 'firebase-functions/params'

import { App } from '@slack/bolt'

import { FunctionInfo, Logger } from '../globals'

// v2 config
const slackBotToken = defineString('SLACK_BOT_TOKEN').value()
const slackSigningSecret = defineString('SLACK_SIGNING_SECRET').value()
const slackChannel = FunctionInfo.RESOURCE_CHANNEL_ID

const boltAppV2 = new App({
  token: slackBotToken,
  signingSecret: slackSigningSecret,
  processBeforeResponse: true,
})

/**
 * Cloud Storage Handler
 * @param object Object Metadata
 */
export const notifyV2Handler = (event: StorageEvent) => {
  const url = `https://storage.googleapis.com/${event.data.bucket}/${event.data.name}`
  const chat = boltAppV2.client.chat
  chat.postMessage({
    channel: slackChannel,
    text: url,
  })
  Logger.info('fetched file: ', url)
}
