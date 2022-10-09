import * as functions from "firebase-functions/v1";

const logger = functions.logger;


/**
 * Cloud Storage Handler
 * @param object Object Metadata
 */
export const notifyHandler = async (object: functions.storage.ObjectMetadata) => {
  logger.info("link: ", object.mediaLink);
  logger.info("name: ", object.name);
};
