import StudentRecord from "../models/Student_record.js";
import mongoose from "mongoose";

export const setCorsHeaders = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
};

export const getStudentRecords = async (req, res) => {
  try {
    const studentRecords = await StudentRecord.find();
    res.status(200).json({ success: true, data : studentRecords });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching student records", error: error.message });
  }
};

export const createStudentRecord = async (req, res) => {
  
  const student = req.body;
  if (!student.name || !student.classLevel || !student.rollNumberId || !student.vaccinationStatus) {
    return res.status(400).json({ message: "Please provide all fields" });
  }
  const newStudent = new StudentRecord(student);
  try {
    const studentRecord = await newStudent.save();
      res.status(201).json({success:true, message:"Student Record Created Successfully ",studentRecord});  
  } catch (error) {
    
    res.status(500).json({ success: false, message: "Error creating student record" , error: error.message });
  }   
  };

export const updateStudentRecord = async (req, res) => {
  const { id } = req.params;
  const student = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid student ID" });
  }
  try {
    const updatedstudentRecord = await StudentRecord.findByIdAndUpdate(id, student, { new: true });
    res.status(200).json({ success: true, message: "Student record updated successfully", updatedstudentRecord});
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating student record", error: error.message });
  }
};

export const deleteStudentRecord = async (req, res) => {
  const { id } = req.params;
  try {
    const studentRecord = await StudentRecord.findByIdAndDelete(id);
    if (!studentRecord) {
      return res.status(404).json({ success: false, message: "Student record not found" });
    }
    res.status(200).json({ success: true, message: "Student record deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting student record", error: error.message });
  }

};