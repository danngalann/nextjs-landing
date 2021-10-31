import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Logo(props: object) {
  return (
    <Box {...props}>
      <NextLink href="/">
        <Image src="img/logo.png" alt="Logo inserte" maxWidth="200px" cursor="pointer"/>
      </NextLink>
    </Box>
  );
}
