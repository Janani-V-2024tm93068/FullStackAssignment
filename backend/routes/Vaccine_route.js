import express from "express";
import VaccineRecord from "../models/Vaccine_record.js"; 
import mongoose, { get } from "mongoose";  
import { createVaccineRecord, deleteVaccineRecord, getVaccineRecords, updateVaccineRecord } from "../controller/Vaccine_controller.js";

const router = express.Router();


export default router;

router.get("/", getVaccineRecords);

router.post("/", createVaccineRecord);

router.put("/:id", updateVaccineRecord);

router.delete("/:id", deleteVaccineRecord);