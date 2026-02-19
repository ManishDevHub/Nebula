import { Hono } from "hono";
import { logger } from "hono/logger";
import { timeout } from "hono/timeout";
import { cors } from "hono/cors";
import { rateLimiter } from "hono-rate-limiter";
import { jwt } from "hono/jwt";

const app = new Hono();

const SERVICES = {
  AUTH: process.env.AUTH_SERVICE_URL || "http://localhost:4000",
  PAYMENT: process.env.PAYMENT_SERVICE_URL || "http://localhost:5000",
  MONITERING: process.env.MONITORING_SERVICE_URL || "http://localhost:6000",
  NOTIFICATION: process.env.NOTIFICATION_SERVICE_URL || "http://localhost:7000",
};

const JWT_SECRET = process.env.JWTSECRET || "djhfjkladjfalkjdfgkjdfgkjdfgkjdfg";

app.use("*", logger());
app.use("*", timeout(5000));
app.use("*", cors());

app.use(
  "*",
  rateLimiter({
    windowMs: 60 * 1000,
    limit: 100,
    keyGenerator: (c) => c.req.header('x-forwarded-for') ?? c.req.header('x-real-ip') ?? 'global',
  }),
);

app.use("/api/auth/*", async (c, next) => {
  if (c.req.path.startsWith("/api/auth/login")) {
    return next();
  }

  try {
    await jwt({ secret: JWT_SECRET, alg: "HS256" })(c, next);
  } catch (err) {
    return c.json({ message: "Unauthorized" }, 401);
  }
});

const circuitState: Record<string, { failures: number; open: boolean }> = {};

const MAX_FAILURES = 5;
const RESET_TIMEOUT = 10000;

const handleProxy = async (target: string, c: any) => {
  const path = c.req.path.replace(/^\/api\/[^\/]+/, "");
  const url = `${target}${path}${c.req.raw.url.includes("?") ? "?" + c.req.raw.url.split("?")[1] : ""}`;

  try {
    const response = await fetch(url, {
      method: c.req.method,
      headers: c.req.header(),
      body: ["POST", "PUT", "PATCH"].includes(c.req.method)
        ? c.req.raw.blob()
        : undefined,
    });

    return new Response(response.body, response);
  } catch (err) {
    console.error(`Error proxying to ${target}:`, err);
    return c.json(
      { message: "Service Unavailable can't be reach the microservice" },
      503,
    );
  }
};

app.all("/api/auth/*", (c) => handleProxy(SERVICES.AUTH, c));
app.all("/api/payment/*", (c) => handleProxy(SERVICES.PAYMENT, c));
app.all("/api/monitoring/*", (c) => handleProxy(SERVICES.MONITERING, c));
app.all("/api/notification/*", (c) => handleProxy(SERVICES.NOTIFICATION, c));

export default {
  port: process.env.PORT || 8001,
  fetch: app.fetch,
};
