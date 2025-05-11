import VaccineRecord from "../models/Vaccine_record.js";
import mongoose from "mongoose";

export const setCorsHeaders = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
};

export const getVaccineRecords = async (req, res) => {
  try {
    const VaccineRecords = await VaccineRecord.find();
    res.status(200).json({ success: true, data : VaccineRecords });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching vaccine records", error: error.message });
  }
};

export const createVaccineRecord = async (req, res) => {
  
  const vaccine = req.body;
  if (!vaccine.vaccineName || !vaccine.driveDate || !vaccine.availableDoses || !vaccine.applicableClassLevel) 
  {
    return res.status(400).json({ message: "Please provide all details" });
  }
  vaccine.driveDate = new Date(vaccine.driveDate);
  const newVaccine = new VaccineRecord(vaccine);
  try {
    const vaccineRecord = await newVaccine.save();
      res.status(201).json({success:true, message:"Vaccine Record Created Successfully ",VaccineRecord});  
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Error creating vaccine record" , error: error.message });
  }   
  };

export const updateVaccineRecord = async (req, res) => {
  const { id } = req.params;
  const vaccine = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid vaccine ID" });
  }
  try {
    const updatedvaccineRecord = await VaccineRecord.findByIdAndUpdate(id, vaccine, { new: true });
    res.status(200).json({ success: true, message: "vaccine record updated successfully", updatedvaccineRecord});
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating vaccine record", error: error.message });
  }
};

export const deleteVaccineRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const vaccineRecord = await VaccineRecord.findByIdAndDelete(id);
    if (!vaccineRecord) {
      return res.status(404).json({ success: false, message: "Vaccine record not found" });
    }
    res.status(200).json({ success: true, message: "Vaccine record deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting vaccine record", error: error.message });
  }

};