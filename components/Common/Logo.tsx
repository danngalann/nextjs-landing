import React from "react";
import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

export default function Logo(props: object) {
  return (
    <Box {...props}>
      <NextLink href="/">
        <Box cursor="pointer" width="12rem" height="3rem" position="relative">
          <Image
            src="v1637164784/inserte/logo_ksjafb.png"
            alt="Logo inserte"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </NextLink>
    </Box>
  );
}
