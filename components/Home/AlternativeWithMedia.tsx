import React from "react";

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { Parallax } from "react-scroll-parallax";

export default function Awm({ lazyImages = true }: { lazyImages?: boolean }) {
  const PARALLAX_DISPLACE_VALUE = 30;

  return (
    <Flex
      p={{ base: "none", md: 20 }}
      w="full"
      justifyContent="center"
      alignItems="center"
      pos="absolute"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px="5%"
        py={30}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <Parallax
              y={[PARALLAX_DISPLACE_VALUE, -PARALLAX_DISPLACE_VALUE]}
              disabled={isMobile}
            >
              <chakra.h2
                mb={4}
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: "center", md: "left" }}
                color={useColorModeValue("gray.900", "gray.400")}
                lineHeight={{ md: "shorter" }}
                textShadow="2px 0 currentcolor"
              >
                Carnes
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.400")}
                fontSize={{ md: "lg" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                accusamus quam facere amet optio rerum architecto totam placeat
                impedit ex mollitia inventore culpa beatae, quia dolores officia
                modi quibusdam! Quasi.
              </chakra.p>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                bg={useColorModeValue("gray.900", "gray.700")}
                _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
                color={useColorModeValue("gray.100", "gray.200")}
                as="a"
              >
                Ver Productos
              </Button>
            </Parallax>
          </Box>
          {isMobile ? null : (
            <Box w="full" h="full" display="flex" justifyContent="center">
              {lazyImages ? (
                <Image
                  alt=""
                  src="img/carne.png"
                  loading="lazy"
                  placeholder="blur"
                  layout="responsive"
                  width="90%"
                />
              ) : (
                <Image
                  alt=""
                  src="img/carne.png"
                  placeholder="blur"
                  layout="responsive"
                  width="90%"
                />
              )}
            </Box>
          )}
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: 0, md: 2 }}>
            <Parallax
              y={[PARALLAX_DISPLACE_VALUE, -PARALLAX_DISPLACE_VALUE]}
              disabled={isMobile}
            >
              <chakra.h2
                mb={4}
                fontSize={{ base: "2xl", md: "4xl" }}
                fontWeight="extrabold"
                letterSpacing="tight"
                textAlign={{ base: "center", md: "left" }}
                color={useColorModeValue("gray.900", "gray.400")}
                lineHeight={{ md: "shorter" }}
              >
                Postres
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color={useColorModeValue("gray.600", "gray.400")}
                fontSize={{ md: "lg" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita ea impedit similique reprehenderit mollitia, illo
                necessitatibus temporibus minima voluptas non. Voluptatibus
                dolorum doloribus, labore voluptate saepe quae adipisci
                quibusdam. Sint.
              </chakra.p>
              <Button
                w={{ base: "full", sm: "auto" }}
                size="lg"
                bg={useColorModeValue("gray.900", "gray.700")}
                _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
                color={useColorModeValue("gray.100", "gray.200")}
                as="a"
              >
                Ver Productos
              </Button>
            </Parallax>
          </Box>

          {isMobile ? null : (
            <Box w="full" h="full" display="flex" justifyContent="center">
              {lazyImages ? (
                <Image
                  alt=""
                  src="img/postre.png"
                  loading="lazy"
                  placeholder="blur"
                  layout="responsive"
                  width="20%"
                />
              ) : (
                <Image
                  alt=""
                  src="img/postre.png"
                  placeholder="blur"
                  layout="responsive"
                  width="20%"
                />
              )}
            </Box>
          )}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
