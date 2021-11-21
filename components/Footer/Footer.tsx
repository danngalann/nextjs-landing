import { Box, Container, Stack, Text, Flex, Link, Tag } from "@chakra-ui/react";
import { ReactNode } from "react";
import Logo from "../Common/Logo";
import NextLink from "next/link";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg="gray.100" color="gary.700">
      <Flex
        justifyContent="space-around"
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "full", md: "6xl" }}
        py={{base: 5, md: 10}}
        margin="0 auto"
      >
        <Stack alignItems={{base: "center", md:"flex-start"}} my={{base: 4, md: 0}}>
          <ListHeader>Productos</ListHeader>
          <Link href="/productos">Todo</Link>
          <Link href="/productos/pescado">
            Pescado
          </Link>
          <Flex>
            <Text color="gray.400">Carnes</Text>
            <Tag size={"sm"} bg="green.300" ml={2} color={"white"}>
              Próximamente
            </Tag>
          </Flex>
          <Flex>
            <Text color="gray.400">Postres</Text>
            <Tag size={"sm"} bg="green.300" ml={2} color={"white"}>
              Próximamente
            </Tag>
          </Flex>
        </Stack>
        <Stack alignItems={{base: "center", md:"flex-start"}} my={{base: 4, md: 0}}>
          <ListHeader>Empresa</ListHeader>
          <NextLink href="/" passHref>
            <Link>Inicio</Link>
          </NextLink>
          <NextLink href="/empresa" passHref>
            <Link>Sobre nosotros</Link>
          </NextLink>
          <NextLink href="/contacto" passHref>
            <Link>Contacto</Link>
          </NextLink>
        </Stack>
        <Stack alignItems={{base: "center", md:"flex-start"}} my={{base: 4, md: 0}}>
          <ListHeader>Legal</ListHeader>
          <NextLink href="/legal/cookies" passHref>
            <Link>Política de Cookies</Link>
          </NextLink>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Law Enforcement</Link>
          <Link>Status</Link>
        </Stack>
      </Flex>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.200",
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.200",
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © {new Date().getFullYear()} NextJs Food. Todos los derechos
          reservados.
        </Text>
      </Box>
    </Box>
  );
}
