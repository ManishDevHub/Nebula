
import Redis from "ioredis";
import { env } from "../config/env";
import { json } from "node:stream/consumers";

const redis = new Redis(env.RADIS_URL);

export async function checkIdempotency(key: string) {

return await redis.get(key);
}

export async function storeIdempotency(key: string, value: string) {
    await redis.set(key , JSON.stringify(value), "EX", 60 * 60); // Store for 1 hour
}