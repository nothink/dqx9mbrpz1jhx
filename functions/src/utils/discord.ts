import axios from "axios";

import { DISCORD_WEBHOOK_URL } from "../globals";

export const notifyDiscord = (url: URL) => {
	const message = {
		content: url.href,
		tts: false,
	};
	axios.post(DISCORD_WEBHOOK_URL, message);
};
