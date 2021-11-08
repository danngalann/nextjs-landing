import React from "react";
import NextLink from "next/link";
import { Box, Stack, Button } from "@chakra-ui/react";

const MenuItem = ({
  children,
  to = "/",
  onClick,
}: {
  children: string;
  to: string;
  onClick: any;
}) => {
  return (
    <NextLink href={to} passHref>
      <Button as="a" variant="ghost" aria-label={children} onClick={onClick}>
        {children}
      </Button>
    </NextLink>
  );
};

const MenuLinks = ({ isOpen, toggle }: { isOpen: boolean; toggle: any }) => {
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
        <MenuItem to="/" onClick={toggle}>
          Inicio
        </MenuItem>
        <MenuItem to="/empresa" onClick={toggle}>
          Empresa
        </MenuItem>
        <MenuItem to="/productos" onClick={toggle}>
          Productos
        </MenuItem>
        <MenuItem to="/contacto" onClick={toggle}>
          Contacto
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
