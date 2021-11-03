import React from "react";
import Card from "./Card";
import { Flex } from "@chakra-ui/react";

export default function Testimonials() {
  return (
    <Flex mt={20} direction={{base: "column", md: "row"}}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Flex>
  );
}
