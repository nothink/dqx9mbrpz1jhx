import type { GlobalOptions } from "firebase-functions/v2";

/** bucket name */
export const BUCKET_NAME = "dqx9mbrpz1jhx";

export const DISCORD_WEBHOOK_URL =
	"https://discord.com/api/webhooks/1224945114275647498/0XEEg4jXVOmsyvascR8ciN4_Kw4wMeQHZUjd_0DKvhDhCicnYSRIPyaS6x52ltxy9oBo";

/**
 * v2 global options.
 */
export const Options: GlobalOptions = {
	region: "asia-northeast1",
	memory: "128MiB",
	timeoutSeconds: 240,
	maxInstances: 2,
};
