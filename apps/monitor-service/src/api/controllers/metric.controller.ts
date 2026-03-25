import { createMetric } from "../../services/metric.service";
import { logger } from "../../utils/logger";

export const createMetricHandler = async (c: any) => {
  try {
    const body = await c.req.json();

    const metric = await createMetric({
      service: body.service,
      name: body.name,
      value: body.value,
    });

    logger.info(`Metric stored: ${body.name}`);

    return c.json({
      success: true,
      metric,
    });

  } catch (error) {
    logger.error("Failed to store metric");

    return c.json({
      success: false,
      message: "Error storing metric",
    }, 500);
  }
};