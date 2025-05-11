import express from "express";
import StudentRecord from "../models/Student_record.js"; 
import mongoose, { get } from "mongoose";  
import { createStudentRecord, deleteStudentRecord, getStudentRecords, updateStudentRecord } from "../controller/Student_controller.js";

const router = express.Router();


export default router;

router.get("/", getStudentRecords);

router.post("/", createStudentRecord);

router.put("/:id", updateStudentRecord);

router.delete("/:id", deleteStudentRecord);