import { Flex } from "@chakra-ui/react";
import React from "react";

export default function NavbarContainer({
  children,
  ...props
}: {
  children: object;
}) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg="primary.500"
      color="black"
      {...props}
    >
      {children}
    </Flex>
  );
}
