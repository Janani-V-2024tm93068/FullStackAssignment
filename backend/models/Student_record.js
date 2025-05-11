import mongoose from "mongoose";

const studentRecordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    classLevel: {
        type: Number,
        required: true
    },
    rollNumberId: {
        type: Number,
        required: true
    },  
    vaccinationStatus: {
        type: String,
        required: true
    },
},
    {
        timestamps: true, // createdAt, updatedAt
	}
);

const StudentRecord = mongoose.model("StudentRecord", studentRecordSchema);
export default StudentRecord;