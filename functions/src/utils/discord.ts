import axios from "axios";

import { DISCORD_WEBHOOK_URL } from "../globals";

/**
 * DiscordにWebhook経由で通知する
 * 	https://discord.com/developers/docs/resources/webhook#execute-webhook-jsonform-params
 * @param url URL
 */
export const notifyDiscord = (url: URL) => {
	const message = {
		content: url.href,
		tts: false,
	};
	axios.post(DISCORD_WEBHOOK_URL, message);
};
