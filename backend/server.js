import express from 'express';
import mongoose from 'mongoose';  
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import StudentRecord from './models/Student_record.js';
import StudentRoute from './routes/Student_route.js';
import VaccineRecord from './models/Vaccine_record.js';
import VaccineRoute from './routes/Vaccine_route.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5000;
//console.log(process.env.mongo_url);

//app.get('/', (req, res) => {
//  res.send('Server is running');
//})

app.use(express.json());

app.use("/api/student",StudentRoute);

app.use("/api/vaccine",VaccineRoute);

app.use(cors({ origin: 'http://localhost:5173' }));

app.listen(PORT, () => {
  connectDB();
  console.log('Server started at http://localhost:5000');
});




