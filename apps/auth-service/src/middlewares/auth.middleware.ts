
import type { Request , Response ,NextFunction } from "express";
import jwt from "jsonwebtoken";
const JWTSECRET = process.env.JWTSECRET || "djhfjkladjfalkjdfgkjdfgkjdfgkjdfg";

export interface AuthRequest extends Request{
    user?: any
}

export const auth = (req:AuthRequest , res:Response , next:NextFunction) => {
    const authHeader = req.headers?.authorization;

    if (!authHeader || typeof authHeader !== "string" || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];
    if (!token || token === "null" || token === "undefined") {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try{
        const decoded = jwt.verify(token , JWTSECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({message:"Invalid token"});
    }
}