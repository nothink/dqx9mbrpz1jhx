import type { Request, Response } from "firebase-functions";
import { logger } from "firebase-functions/v2";

import { fetchDqx9mbrpz1jhx } from "../utils/fetch";

/**
 * HTTPS Handler for Firebase Cloud Functions.
 * POST only.
 *
 * @param req Request Object
 * @param res Response Object
 */
export const dqx9mbrpz1jhxHandler = async (req: Request, res: Response) => {
	if (req.method === "POST") {
		const urls = req.body.urls as string[];
		for (const elem of urls) {
			// Iterate files in urls.
			const url = new URL(elem);
			await fetchDqx9mbrpz1jhx(url);
		}
		res.sendStatus(202);
	} else {
		logger.warn(req);
		res.sendStatus(405);
	}
};
