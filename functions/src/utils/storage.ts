/**
 * GCSで使うファイル名を作成
 * @param url URLオブジェクト
 * @returns GCSで使うファイル名(オブジェクトキー)
 */
export const getFilename = (url: URL): string => {
  // pathname が '/' で始まってる時は除去
  return url.pathname.startsWith('/') ? url.pathname.substring(1) : url.pathname
}
