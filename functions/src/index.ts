import * as functions from 'firebase-functions/v1'

// v2 移行は functions.config() 以外で 'asia-northeast1' が指定できるまでお預け
// import { onObjectFinalized, } from 'firebase-functions/v2/storage'

import { dqx9mbrpz1jhxHandler } from './handler/https'
import { notifyV1Handler } from './handler/storage'
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
export const notifyV1 = functions
  .region('asia-northeast1')
  .runWith({
    memory: FunctionInfo.MEMORY,
    timeoutSeconds: FunctionInfo.TIMEOUT
  })
  .storage.bucket(FunctionInfo.BUCKET_NAME)
  .object()
  .onFinalize(notifyV1Handler)

// export const notifyV2 = onObjectFinalized(FunctionInfo.BUCKET_NAME, notifyV2Handler)
