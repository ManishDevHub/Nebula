import { Hono } from "hono";
import logRoutes from "./log.routes";

const routes = new Hono();


routes.route("/logs", logRoutes);

export default routes;