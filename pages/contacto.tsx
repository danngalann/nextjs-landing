import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
  Icon,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdOutlineEmail,
  MdPerson,
} from "react-icons/md";

export default function contact() {
  return (
    <Container maxW="full" mt={0} centerContent bg="gray.50" overflow="hidden">
      <Box
        bg="gray.700"
        color="white"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}
      >
        <Flex direction={{ base: "column", md: "row" }}>
          <Box mx={8} mt={8}>
            <Heading>Contacto</Heading>
            <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.400">
              Cuéntanos lo que necesitas. Pregunta lo que quieras.
            </Text>
            <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
              <VStack pl={0} spacing={3} alignItems="flex-start">
                <Box>
                  <Icon as={MdPhone} mr={2} />
                  <Link href="tel:938495572">93 849 55 72</Link>
                </Box>
                <Box>
                  <Icon as={MdEmail} mr={2} />
                  <Link href="mailto:inserte@inserte.com">
                    inserte@inserte.com{" "}
                  </Link>
                </Box>
                <Flex>
                  <Icon as={MdLocationOn} mr={2} />
                  <Text>
                    Avenida Europa, 31 Polígono Ind Palou Nord · 08401
                    Granollers
                  </Text>
                </Flex>
              </VStack>
            </Box>
            {/* <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    Social icons here if any
                  </HStack> */}
          </Box>
          <Box bg="white" borderRadius="lg" mx={4} mb={8}>
            <Box m={8} color="#0B0E3F">
              <VStack spacing={5}>
                <FormControl id="name">
                  <FormLabel>Tu nombre</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <Icon as={MdPerson} color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Correo electrónico</FormLabel>
                  <InputGroup borderColor="#E0E1E7">
                    <InputLeftElement pointerEvents="none">
                      <MdOutlineEmail color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea
                    borderColor="gray.300"
                    _hover={{
                      borderRadius: "gray.300",
                    }}
                    placeholder="Escribe tu mensaje..."
                  />
                </FormControl>
                <FormControl id="name" float="right">
                  <Button
                    variant="solid"
                    bg="#0D74FF"
                    color="white"
                    _hover={{}}
                  >
                    Enviar mensaje
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
}
