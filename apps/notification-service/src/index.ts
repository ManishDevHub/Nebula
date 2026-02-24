
import Hono from "hono";

//@ts-ignore
const app = new Hono();

app.get("/api/notify", (c) => {
  return c.json({ message: "Notification service is running!" });
});


export default app;
