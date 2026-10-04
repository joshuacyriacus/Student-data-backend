import express from "express";
import { createStudent, getStudentProfile } from "../controllers/student.controller.js";

export const Router = express.Router();

Router.get("/students", getStudentProfile);
Router.post("/students", createStudent);

