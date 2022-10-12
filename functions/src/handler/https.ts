import express from 'express'
import cors from 'cors'
import * as functions from 'firebase-functions/v1'

import { fetchDqx9mbrpz1jhx } from '../utils/fetch'
import { Logger } from '../globals'

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
        await fetchDqx9mbrpz1jhx(url)
      }
      res.sendStatus(201)
    } else {
      Logger.warn(req)
      res.sendStatus(405)
    }
  })
}
