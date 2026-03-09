
import Hono from "hono";


const app = new Hono();

app.get("/api/notify", (c) => {
  return c.json({ message: "Notification service " });
});


export default app;
