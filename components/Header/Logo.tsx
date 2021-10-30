import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Logo(props: object) {
  return (
    <Box {...props}>
      <Image src="img/logo.png" alt="Logo inserte" maxWidth="200px" />
    </Box>
  );
}
