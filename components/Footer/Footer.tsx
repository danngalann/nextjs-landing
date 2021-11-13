import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
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
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <Flex
          justifyContent="space-around"
          direction={{ sm: "column", md: "row" }}
        >
          <Stack align={"flex-start"}>
            <ListHeader>Productos</ListHeader>
            <NextLink href="#!" passHref>
              <Link>Todo</Link>
            </NextLink>
            <Link>Pescado</Link>
            <Link>Carnes</Link>
            <Link>Postres</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Empresa</ListHeader>
            <Link>Sobre nosotros</Link>
            <Link>Press</Link>
            <Link>Careers</Link>
            <Link>Contact Us</Link>
            <Link>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <NextLink href="/legal/cookies" passHref>
              <Link>Cookies Policy</Link>
            </NextLink>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Law Enforcement</Link>
            <Link>Status</Link>
          </Stack>
        </Flex>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © {new Date().getFullYear()} Congelados Inserte. Todos los derechos
          reservados.
        </Text>
      </Box>
    </Box>
  );
}
