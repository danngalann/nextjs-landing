import React from "react";
import NextLink from "next/link";
import { Box, Stack, Button } from "@chakra-ui/react";

const MenuItem = ({
  children,
  to = "/",
  ...rest
}: {
  children: string;
  to: string;
}) => {
  return (
    <NextLink href={to} passHref>
      <Button as="a" variant="ghost" aria-label={children} {...rest}>
        {children}
      </Button>
    </NextLink>
  );
};

const MenuLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Inicio</MenuItem>
        <MenuItem to="/empresa">Empresa</MenuItem>
        <MenuItem to="/productos">Productos</MenuItem>
        <MenuItem to="/contacto">Contacto</MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
