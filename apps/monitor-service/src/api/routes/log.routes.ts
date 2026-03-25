import { Hono } from "hono";
import { createLogHandler } from "../controllers/log.controller";

const logRoutes = new Hono();

// POST /logs
logRoutes.post("/", createLogHandler);

export default logRoutes;