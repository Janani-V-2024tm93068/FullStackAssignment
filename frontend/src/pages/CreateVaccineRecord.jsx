import React from 'react'
import{ Container, Flex, Text } from '@chakra-ui/react'
import { VStack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useState } from 'react'


const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.vaccineName|| !formData.driveDate || !formData.availableDoses || !formData.applicableclassLevel) {
      alert("Please fill in all fields");
      return;
    }
    try {
      const response = await fetch("/api/vaccine",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.text();
      console.log(result);
      alert("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting form");
    }
  };

return (
    <Container maxW = "container.sm" p={4}>
    <VStack>
        spacing={8}
    <Heading as ="h1" size="2xl" mb={8} color="white">
        <Text fontSize="2xl" fontWeight="bold" color="white" textAlign="center">
            Create Vaccine Record
        </Text>
        <Text fontSize="lg" color="white" textAlign="center" mt={3}>
            Fill in the details below to create a new vaccine record.
        </Text>
    </Heading>
    <Box w="100%" p={4} bg="white" borderRadius="md" boxShadow="md">
    <VStack>
        spacing ={4}
        <Input placeholder="VaccineName" name="vaccineName" value={formData.vaccineName} onChange={handleChange}/>
        <Input placeholder="DriveDate" name="driveDate" value={formData.driveDate} onChange={handleChange}/>
        <Input placeholder="AvailableDoses" name="availableDoses" value={formData.availableDoses} onChange={handleChange}/>
        <Input placeholder="ApplicablclassLevel" name="applicableclassLevel" value={formData.applicableclassLevel} onChange={handleChange}/>
    <Button
        colorScheme="teal"
        onClick = {handleSubmit}>
        Create Record
    </Button>
    </VStack>
    </Box>
    </VStack>
    </Container>
  )
};
export default MyForm;