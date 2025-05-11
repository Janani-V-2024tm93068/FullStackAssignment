import { Route,Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import CreateStudentRecord from './pages/CreateStudentRecord';
import CreateVaccineRecord from './pages/CreateVaccineRecord';
import Navbar from "./components/Navbar";


function App() { 
  return (
    <Box minH="100vh" bgGradient="linear(to-r, teal.500, green.500)">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/createstudentrecord" element={< CreateStudentRecord/>} />
        <Route path="/createvaccinerecord" element={< CreateVaccineRecord/>} />
      </Routes>
    </Box>
  )
}

export default App
