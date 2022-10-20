import { FunctionInfo, Logger } from '../globals'
import { fetchDqx9mbrpz1jhx } from '../utils/fetch'
import { getFilename } from '../utils/storage'
import cors from 'cors'
import express from 'express'
import { initializeApp } from 'firebase-admin/app'
import { getStorage } from 'firebase-admin/storage'
import * as functions from 'firebase-functions/v1'

initializeApp()

const corsHandler = cors({ origin: true })

/**
 * HTTPS Handler for Firebase Cloud Functions.
 * POST only.
 *
 * @param req Request Object
 * @param res Response Object
 */
export const dqx9mbrpz1jhxHandler = (
  req: functions.https.Request,
  res: express.Response
) => {
  corsHandler(req, res, async () => {
    if (req.method === 'POST') {
      const urls = req.body.urls as string[]
      for (const elem of urls) {
        // Iterate files in urls.
        const url = new URL(elem)
        const bucket = getStorage().bucket(FunctionInfo.BUCKET_NAME)
        const filename = getFilename(url)
        if (!filename) {
          Logger.warn('A file name must be specified. : ', filename)
          return
        }
        const file = bucket.file(filename)
        const [exists] = await file.exists()
        if (exists) {
          return
        }

        await fetchDqx9mbrpz1jhx(url, file)
      }
      res.sendStatus(201)
    } else {
      Logger.warn(req)
      res.sendStatus(405)
    }
  })
}
