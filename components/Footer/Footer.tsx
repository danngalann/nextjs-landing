import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Link,
  Tag,
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
            <Link href="http://shop.inserte.com/shop/">Todo</Link>
            <Link href="http://shop.inserte.com/product-category/productos-de-mar/">
              Pescado
            </Link>
            <Flex>
              <Text color="gray.400">Carnes</Text>
              <Tag
                size={"sm"}
                bg="green.300"
                ml={2}
                color={"white"}
              >
                Próximamente
              </Tag>
            </Flex>
            <Flex>
              <Text color="gray.400">Postres</Text>
              <Tag
                size={"sm"}
                bg="green.300"
                ml={2}
                color={"white"}
              >
                Próximamente
              </Tag>
            </Flex>
          </Stack>
          <Stack align={"flex-start"}>
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
          <Stack align={"flex-start"}>
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
