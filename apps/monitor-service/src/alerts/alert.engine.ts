import { ALERT_RULES } from "./rules";
import { sendAlert } from "./alert.dispatcher";

export const checkAlerts = async (metrics: any[]) => {
  for (const metric of metrics) {
    for (const key in ALERT_RULES) {
      const rule = ALERT_RULES[key as keyof typeof ALERT_RULES];

      if (
        metric.name === rule.metric && metric.value > rule.threshold
      ) {
        console.log(`🚨 Alert triggered: ${rule.message}`);

        await sendAlert(rule.message);
      }
    }
  }
};