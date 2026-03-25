import os from "os";

export const collectSystemMetrics = () => {
  const cpuLoad = os.loadavg()[0]; // 1 min avg
  const totalMem = os.totalmem();
  const freeMem = os.freemem();

  const memoryUsage = ((totalMem - freeMem) / totalMem) * 100;

  return [
    {
      name: "cpu_load",
      value: cpuLoad,
    },
    {
      name: "memory_usage",
      value: parseFloat(memoryUsage.toFixed(2)),
    },
  ];
};