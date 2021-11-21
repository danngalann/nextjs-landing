import React from "react";
import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

export default function Logo(props: object) {
  return (
    <Box {...props}>
      <NextLink href="/">
        <Box cursor="pointer" width="12rem" height="6rem" position="relative">
          <Image
            src="v1637492893/nextjs/logo_vttv7p.png"
            sizes="50vw"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </NextLink>
    </Box>
  );
}
