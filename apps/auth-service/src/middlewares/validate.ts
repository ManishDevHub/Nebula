
import type { Request , Response , NextFunction } from "express";

import type { ZodSchema } from "zod";

export const validate = (Schema: ZodSchema) => (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validData = Schema.safeParse(req.body);
        if (!validData.success) {
            return res.status(400).json({ message: "Validation failed" });
        }
        req.body = validData.data;
        next();
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Validation failed", error: err });
    }
};