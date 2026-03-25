export const sendAlert = async (message: string) => {
  try {
    await fetch("http://localhost:3000/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "admin",
        message,
        channels: ["EMAIL", "SMS", "IN_APP"],
      }),
    });

    console.log("🚀 Alert sent to notification system");

  } catch (error) {
    console.error("❌ Failed to send alert:", error);
  }
};