
import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().email(),
    name: z.string().min(4, "Name must be at least 4 characters long").max(20, "Name must be less than 20 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long").max(20, "Password must be less than 20 characters long"),
});

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long").max(20, "Password must be less than 20 characters long"),
});