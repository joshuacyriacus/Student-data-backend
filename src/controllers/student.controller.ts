import { Request, Response } from "express";
import { prisma }from "../lib/prisma.js"
import { error } from "node:console";
 // import { Student } from "../types/student.types.js";
export const getStudentProfile = async (req:Request, res:Response) => {
   
    try {
        const data = await prisma.student.findMany();
        return res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error,
            message: "Internal Server Error"
        })
    }

    res.status(200).json()
}

export const createStudent = async (req:Request,res:Response) => {
   const {name, level, department, reg_no, email} = req.body;

    try {
       
        if (!name?.trim() || !level?.trim() || !department?.trim() || !reg_no?.trim() || !email?.trim()) {
            return res.status(400).json({
                error,
                message:"All fields are required"
            })
        }

      const user= await prisma.student.create({
        data: {
            name,
            level,
            department,
            reg_no,
            email
        }
      })
       console.log(user);
       
      return res.status(201).json(user);
    } catch (error) {
        res.status(500).json({
           error: error,
           message:"internal Server Error"
        })
    }
   
}

