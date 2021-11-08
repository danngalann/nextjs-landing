import React from "react";
import { chakra, Box, Flex, Button } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Cta() {
  return (
    <Flex px={50} w="full" alignItems="center" justifyContent="center">
      <Box bg="gray.50">
        <Box
          maxW="7xl"
          w={{ md: "3xl", lg: "4xl" }}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
          alignItems={{ lg: "center" }}
          justifyContent={{ lg: "space-around" }}
        >
          <chakra.h2
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
          >
            <chakra.span display="block">¿Listo para probar?</chakra.span>
            <chakra.span display="block" color="gray.600">
              Mándanos un mensaje
            </chakra.span>
          </chakra.h2>
          <Flex py={8}>
            <NextLink href="/contacto" passHref>
              <Button
                as="a"
                px={5}
                py={5}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                shadow="md"
                color="brand.600"
                bg="white"
                _hover={{
                  bg: "brand.50",
                }}
              >
                Contactar
              </Button>
            </NextLink>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}
