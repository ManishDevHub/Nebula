
import { Hono } from "hono";
import { env } from "./config/env";
import router from "./routes/payment.routes";



const app = new Hono();

app.route("/api/payments", router);
Bun.serve({
    fetch: app.fetch,    port:(env.PORT)
})



console.log(`Payment service running on port ${env.PORT}`);
app