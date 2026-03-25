export const ALERT_RULES = {
  HIGH_CPU: {
    metric: "cpu_load",
    threshold: 2, 
    message: "🔥 High CPU load detected!",
  },

  HIGH_MEMORY: {
    metric: "memory_usage",
    threshold: 80,
    message: "🚨 High memory usage detected!",
  },

  HIGH_ERROR_RATE: {
    metric: "error_rate",
    threshold: 5,
    message: "❌ High error rate detected!",
  },
};