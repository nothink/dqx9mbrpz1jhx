import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getStorage } from 'firebase-admin/storage'
import { initializeApp } from 'firebase-admin/app'
import * as functions from 'firebase-functions/v1'
import { Readable } from 'stream'

initializeApp()
const logger = functions.logger

/**
 * fetch a dqx9mbrpz1jhx resource using URL
 * like https://dqx9mbrpz1jhx.cloudfront.net/vcard/ratio20/images/card/4a8015cbcbcf79734d7e15e7c774e6fb.jpg
 *
 * @param url URL objects under https://dqx9mbrpz1jhx.cloudfront.net/
 * @returns Promise only
 */
export const fetchDqx9mbrpz1jhx = async (url: URL) => {
  const bucket = getStorage().bucket('dqx9mbrpz1jhx')
  const filename = url.pathname.startsWith('/')
    ? url.pathname.substring(1)
    : url.pathname
  if (!filename) {
    logger.warn('A file name must be specified. : ', filename)
    return
  }
  const file = bucket.file(filename)
  const [exists] = await file.exists()
  if (exists) {
    return
  }

  try {
    const options: AxiosRequestConfig = {
      method: 'GET',
      responseType: 'stream',
      timeout: 600000,
      maxContentLength: 1073741824
    }
    const res: AxiosResponse<Readable> = await axios.get(url.href, options)
    res.data
      .pipe(file.createWriteStream())
      .on('error', err => {
        logger.error('stream error')
        logger.error(err.message)
      })
      .on('finish', () => {
        logger.info('created:', file.cloudStorageURI.href)
      })
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      logger.error(
        `AxiosError (${e.message}) `,
        `HTTP Status: ${e.response.status} ${e.response.statusText} `,
        `URL: ${url.href}`
      )
    } else {
      logger.error('Unknown error: ', e)
    }
  }
}
