import { type GlobalOptions, logger } from "firebase-functions/v2";

/**
 * Global logger
 */
export const Logger = logger;

/** bucket name */
export const BUCKET_NAME = "dqx9mbrpz1jhx";

/**
 * v2 global options.
 */
export const Options: GlobalOptions = {
	region: "asia-northeast1",
	memory: "128MiB",
	timeoutSeconds: 240,
	maxInstances: 2,
};
