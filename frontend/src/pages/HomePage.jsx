import React, { useEffect } from "react";
import { Box, Text, Container, VStack, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useStudentStore } from "../store/students";
import { useVaccineStore } from "../store/vaccines";

const Homepage = () => {
  const { fetchStudents, students } = useStudentStore();
  const { fetchVaccines, vaccines } = useVaccineStore();

  useEffect(() => {
    fetchStudents();
    fetchVaccines();
  }, [fetchStudents, fetchVaccines]);

  return (
    <Container>
      <VStack spacing={16} align="stretch">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
          color="white"
        >
          Dashboard
        </Text>

        <Stack direction="row" spacing={16} align="flex-start">
          {/* Vaccine Records Table */}
          <Box flex={1}>
            <Text fontSize="xl" fontWeight="bold" textAlign="center" color="white" mb={2}>
              Vaccine Records
            </Text>
            <table border="1" width="100%">
              <thead>
                <tr>
                  <th>Vaccine Name</th>
                  <th>Drive Date</th>
                  <th>Available Doses</th>
                  <th>Applicable Class Level</th>
                </tr>
              </thead>
              <tbody>
                {vaccines && vaccines.length > 0 ? (
                  vaccines.map((vaccine, idx) => (
                    <tr key={idx}>
                      <td>{vaccine.vaccineName}</td>
                      <td>{vaccine.driveDate}</td>
                      <td style={{ paddingLeft: "24px" }}>{vaccine.availableDoses}</td>
                      <td>{vaccine.applicableClassLevel}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} style={{ textAlign: "center" }}>No Vaccine Records</td>
                  </tr>
                )}
              </tbody>
            </table>
          </Box>

          {/* Student Records Table */}
          <Box flex={1}>
            <Text fontSize="xl" fontWeight="bold" textAlign="center" color="white" mb={2}>
              Student Records
            </Text>
            <table border="1" width="100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Class Level</th>
                  <th>Roll Number</th>
                  <th>Vaccination Status</th>
                </tr>
              </thead>
              <tbody>
                {students && students.length > 0 ? (
                  students.map((student, index) => (
                    <tr key={index}>
                      <td>{student.name}</td>
                      <td>{student.classLevel}</td>
                      <td>{student.rollNumberId}</td>
                      <td>{student.vaccinationStatus}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} style={{ textAlign: "center" }}>
                      No Records found{" "}
                      <Link to={"/CreateStudentRecord"}>
                        <span style={{ color: "#2b6cb0", textDecoration: "underline" }}>
                          Create a record
                        </span>
                      </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Box>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Homepage;
