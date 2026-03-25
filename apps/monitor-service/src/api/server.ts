import { Hono } from "hono";
import { serve } from "@hono/node-server";
import routes from "./routes";

const app = new Hono();

// Use routes
app.route("/", routes);

// Health check
app.get("/", (c) => {
  return c.json({
    message: "Monitoring Service Running 🚀",
  });
});

// Start server
serve({
  fetch: app.fetch,
  port: 4000,
});

console.log("🚀 Monitoring Service running on http://localhost:4000");