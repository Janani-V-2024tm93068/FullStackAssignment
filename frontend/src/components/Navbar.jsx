import React from 'react'
import { Container, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Container maxW="1500px" p={4} bg="teal.500">
      <Flex 
      	h={16}
				alignItems={"center"}
				justifyContent={"space-between"}
				flexDir={{
					base: "column",
					sm: "row",
				}}>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          textAlign={{
            base: "center",
            sm: "left",
          }}
          mb={{
            base: 4,
            sm: 0,
          }}
				>
					<Link to={"/"}>Student Vaccine Record Management</Link>
				</Text>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ fontSize: "20px", color: 'white', marginRight: '20px' }}>Home</Link>
          <Link to="/createstudentrecord" style={{fontSize: "20px", color: 'white' }}>Create Student Record</Link>
          <Link to="/createvaccinerecord" style={{fontSize: "20px", color: 'white' }}>Create Vaccine Record</Link>
        </nav>
      </Flex>
    </Container>
  )
}

export default Navbar

