import React from "react";
import { Box } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

import logoImage from '../../public/img/logo.png';

export default function Logo(props: object) {
  return (
    <Box {...props}>
      <NextLink href="/">
        <Box cursor="pointer" width="12rem" height="3rem" position="relative">
          <Image
            src={logoImage.src}
            alt="Logo inserte"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </NextLink>
    </Box>
  );
}
