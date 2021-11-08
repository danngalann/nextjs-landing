import React from "react";

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { Parallax } from "react-scroll-parallax";

import carne from "../../public/img/carne.png";
import postre from "../../public/img/postre.png";
import verdura from "../../public/img/verdura.png";

function SizedImage({
  src,
  lazy,
  width,
  height,
}: {
  src: string;
  lazy: boolean;
  width: string;
  height: string;
}) {
  return (
    <Box width={width} height={height} position="relative">
      <Image
        src={src}
        loading={lazy ? "lazy" : "eager"}
        alt=""
        layout="fill"
        objectFit="contain"
        sizes="50vw"
      />
    </Box>
  );
}

function LinkButton({ to, children }: { to: string; children: any }) {
  return (
    <Link href={to} passHref>
      <Button
        w={{ base: "full", sm: "auto" }}
        size="lg"
        bg={useColorModeValue("gray.900", "gray.700")}
        _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
        color={useColorModeValue("gray.100", "gray.200")}
        as="a"
        aria-label={children}
        cursor="pointer"
      >
        {children}
      </Button>
    </Link>
  );
}

export default function Awm({ lazyImages = true }: { lazyImages?: boolean }) {
  const PARALLAX_DISPLACE_VALUE = 60;

  return (
    <Flex
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        // shadow="xl"
        // bg="gray.50"
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
                lineHeight={{ md: "shorter" }}
              >
                Carnes
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                fontSize={{ md: "lg" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                accusamus quam facere amet optio rerum architecto totam placeat
                impedit ex mollitia inventore culpa beatae, quia dolores officia
                modi quibusdam! Quasi.
              </chakra.p>
              <LinkButton to="#!">Ver Productos</LinkButton>
            </Parallax>
          </Box>
          {isMobile ? null : (
            <Box w="full" h="full" display="flex" justifyContent="center">
              <SizedImage
                src={carne.src}
                width="35rem"
                height="35rem"
                lazy={lazyImages}
              />
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
                color="gray.600"
                lineHeight={{ md: "shorter" }}
              >
                Postres
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color="gray.600"
                fontSize={{ md: "lg" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita ea impedit similique reprehenderit mollitia, illo
                necessitatibus temporibus minima voluptas non. Voluptatibus
                dolorum doloribus, labore voluptate saepe quae adipisci
                quibusdam. Sint.
              </chakra.p>
              <LinkButton to="#!">Ver Productos</LinkButton>
            </Parallax>
          </Box>

          {isMobile ? null : (
            <Box
              w="full"
              h="full"
              display="flex"
              justifyContent="center"
              position="relative"
            >
              <SizedImage
                src={postre.src}
                width="23rem"
                height="23rem"
                lazy={lazyImages}
              />
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
                color="gray.900"
                lineHeight={{ md: "shorter" }}
              >
                Verduras
              </chakra.h2>
              <chakra.p
                mb={5}
                textAlign={{ base: "center", sm: "left" }}
                color="gray.600"
                fontSize={{ md: "lg" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita ea impedit similique reprehenderit mollitia, illo
                necessitatibus temporibus minima voluptas non. Voluptatibus
                dolorum doloribus, labore voluptate saepe quae adipisci
                quibusdam. Sint.
              </chakra.p>
              <LinkButton to="#!">Ver Productos</LinkButton>
            </Parallax>
          </Box>

          {isMobile ? null : (
            <Box
              w="80%"
              h="full"
              display="flex"
              justifyContent="center"
              position="relative"
            >
              <SizedImage
                src={verdura.src}
                width="30rem"
                height="30rem"
                lazy={lazyImages}
              />
            </Box>
          )}
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
