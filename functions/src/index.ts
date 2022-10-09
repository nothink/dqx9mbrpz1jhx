import * as functions from 'firebase-functions/v1'

import { dqx9mbrpz1jhxHandler } from './handler/https'
import { notifyHandler } from './handler/storage'

// dqx9mbrpz1jhx
export const dqx9mbrpz1jhx = functions
  .region('asia-northeast1')
  .runWith({ memory: '256MB', timeoutSeconds: 540 })
  .https.onRequest(dqx9mbrpz1jhxHandler)

// notify
export const notify = functions
  .region('asia-northeast1')
  .runWith({ memory: '256MB', timeoutSeconds: 540 })
  .storage.bucket('dqx9mbrpz1jhx')
  .object()
  .onFinalize(notifyHandler)
