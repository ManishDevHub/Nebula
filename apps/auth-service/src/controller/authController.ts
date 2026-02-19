
import type { Response ,Request } from "express";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
import  prisma  from "../../../../packages/db/lib/prisma";
const JWTSECRET = process.env.JWTSECRET || "dfjalkjdfgkjdfgkjdfgkjdfgkjdfg";

export const register  = async (req:Request , res:Response) => {

    try{

        const {email , name , password} = req.body;
        if(!email || !name || !password){
            return res.status(400).json({message:"All fields are required"})
        }

    const exitingUser = await prisma.user.findUnique({where:{email}})

    if(exitingUser){
        return res.status(400).json({message:"User already exists"});

    }
    const hashedPassword = await bcrypt.hash(password , 10);
    const user = await prisma.user.create({
        data:{
            email,
            name,
            password:hashedPassword
        }
    })    
    
    if(!user){

        return res.status(500).json({message:"Failed to create user"})
    }
    res.status(201).json({ message:"User registered successfully"});
    }catch(err){
       console.log(err);

    return res.status(500).json({message:"Internal Server Error"})
    }

}


export const Login = async (req:Request , res:Response) => {

    try{

        const {email , password} = req.body
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"});
        }

        const user = await prisma.user.findUnique({where:{email}});
        if(!user){
            return res.status(400).json({message:"Invalid email or password"})
        }

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid email or password"});
        }

        const token = jwt.sign({userId:user.id} , JWTSECRET , {expiresIn:"7d"})

        res.json({
            token,
            message:"Login successful",
            user:{
                id:user.id,
                email:user.email,
                name:user.name
            }
        });

    }catch(err) {
        console.log(err);

        return res.status(500).json({ message: "Internal Server Error" });
    }
}