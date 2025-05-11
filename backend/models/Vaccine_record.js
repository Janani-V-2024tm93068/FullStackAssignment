import mongoose from "mongoose";

const VaccineRecordSchema = new mongoose.Schema({
    vaccineName: {
        type: String,
        required: true
    },
    driveDate: {
        type: String,
        required: true
    },
    availableDoses: {
        type: String,
        required: true
    },
    applicableClassLevel: {
        type: String,
        required: true
    },
},
    {
        timestamps: true, // createdAt, updatedAt
	}
);

const VaccineRecord = mongoose.model("VaccineRecord", VaccineRecordSchema);
export default VaccineRecord;