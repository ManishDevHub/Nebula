import { createLog } from "../../services/log.service";
import { logger } from "../../utils/logger";

export const createLogHandler = async (c: any) => {
  try {
    const body = await c.req.json();

    const log = await createLog({
      service: body.service,
      level: body.level,
      message: body.message,
    });

    logger.info(`Log stored from ${body.service}`);

    return c.json({
      success: true,
      log,
    });

  } catch (error) {
    logger.error("Failed to store log");

    return c.json({
      success: false,
      message: "Error storing log",
    }, 500);
  }
};