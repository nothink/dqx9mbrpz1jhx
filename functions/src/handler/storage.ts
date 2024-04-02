import { defineString } from "firebase-functions/params";
import type { StorageEvent } from "firebase-functions/v2/storage";

import { App } from "@slack/bolt";

import { Logger } from "../globals";

// v2 config
const slackBotToken = defineString("SLACK_BOT_TOKEN");
const slackSigningSecret = defineString("SLACK_SIGNING_SECRET");
const slackChannel = defineString("SLACK_CHANNEL_ID");

const boltAppV2 = new App({
	token: slackBotToken.value(),
	signingSecret: slackSigningSecret.value(),
	processBeforeResponse: true,
});

/**
 * Cloud Storage Handler
 * @param object Object Metadata
 */
export const notifyV2Handler = (event: StorageEvent) => {
	const url = `https://storage.googleapis.com/${event.data.bucket}/${event.data.name}`;
	const chat = boltAppV2.client.chat;
	chat.postMessage({
		channel: slackChannel.value(),
		text: url,
	});
	Logger.info("fetched file: ", url);
};
