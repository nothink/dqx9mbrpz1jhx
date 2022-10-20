import { Logger } from '../globals'
import { File } from '@google-cloud/storage'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Readable } from 'stream'

/**
 * fetch a dqx9mbrpz1jhx resource using URL
 * like https://dqx9mbrpz1jhx.cloudfront.net/vcard/ratio20/images/card/4a8015cbcbcf79734d7e15e7c774e6fb.jpg
 *
 * @param url URL objects under https://dqx9mbrpz1jhx.cloudfront.net/
 * @returns Promise only
 */
export const fetchDqx9mbrpz1jhx = async (url: URL, file: File) => {
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
        Logger.error('stream error: ', err.message)
      })
      .on('finish', () => {
        Logger.info('created: ', file.cloudStorageURI.href)
      })
  } catch (e) {
    if (axios.isAxiosError(e) && e.response) {
      Logger.error(
        `AxiosError (${e.message}) `,
        `HTTP Status: ${e.response.status} ${e.response.statusText} `,
        `URL: ${url.href}`
      )
    } else {
      Logger.error('Unknown error: ', e)
    }
  }
}
