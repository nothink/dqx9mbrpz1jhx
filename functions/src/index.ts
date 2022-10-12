import * as functions from 'firebase-functions/v1'

import { dqx9mbrpz1jhxHandler } from './handler/https'
import { notifyHandler } from './handler/storage'
import { FunctionInfo } from './globals'

// dqx9mbrpz1jhx
export const dqx9mbrpz1jhx = functions
  .region('asia-northeast1')
  .runWith({
    memory: FunctionInfo.MEMORY,
    timeoutSeconds: FunctionInfo.TIMEOUT
  })
  .https.onRequest(dqx9mbrpz1jhxHandler)

// notify
export const notify = functions
  .region('asia-northeast1')
  .runWith({
    memory: FunctionInfo.MEMORY,
    timeoutSeconds: FunctionInfo.TIMEOUT
  })
  .storage.bucket(FunctionInfo.BUCKET_NAME)
  .object()
  .onFinalize(notifyHandler)

// export const kickNotify = functions
//   .region('asia-northeast1')
//   .runWith({ memory: '256MB', timeoutSeconds: 540 })
//   .database.ref(Info.NAME)
//   .onCreate(kickNotifyHandler)
