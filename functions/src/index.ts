import { setGlobalOptions } from "firebase-functions/v2";
import { onRequest } from "firebase-functions/v2/https";
import { onObjectFinalized } from "firebase-functions/v2/storage";
// v2 移行時に v1 も同時定義したら config() 周りで v2 ランタイムがエラーを吐く
// どうやら v1 と v2 が同時にあると config() 名前空間がマズいことになるっぽい

import { BUCKET_NAME, Options } from "./globals";
import { dqx9mbrpz1jhxHandler } from "./handler/https";
import { notifyV2Handler } from "./handler/storage";

// global options
setGlobalOptions(Options);

// dqx9mbrpz1jhx
export const dqx9mbrpz1jhx = onRequest({ cors: true }, dqx9mbrpz1jhxHandler);

// notify
export const notify = onObjectFinalized(BUCKET_NAME, notifyV2Handler);
