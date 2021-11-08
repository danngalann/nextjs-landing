import React from "react";
import Card from "./Card";
import { Flex } from "@chakra-ui/react";

export default function Testimonials() {
  return (
    <Flex mt={20} direction={{ base: "column", md: "row" }}>
      <Card
        title="Increíble experiencia"
        author="Mark Gills"
        imageSrc="https://source.unsplash.com/collection/284790/70x70"
        review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, maxime? Sed dolores exercitationem numquam aspernatur rem omnis! Totam, libero quae."
      />
      <Card
        title="Muy buen trato"
        author="Gemma Peterson"
        imageSrc="https://source.unsplash.com/collection/772333/70x70"
        review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, maxime? Sed dolores exercitationem numquam aspernatur rem omnis! Totam, libero quae."
      />
      <Card
        title="Al gusto"
        author="Leo Richards"
        imageSrc="https://source.unsplash.com/collection/11540726/70x70"
        review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, maxime? Sed dolores exercitationem numquam aspernatur rem omnis! Totam, libero quae."
      />
    </Flex>
  );
}
