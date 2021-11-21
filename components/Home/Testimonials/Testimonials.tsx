import React from "react";
import Card from "./Card";
import { Flex } from "@chakra-ui/react";

export default function Testimonials() {
  return (
    <Flex mt={20} direction={{ base: "column", md: "row" }}>
      <Card
        title="Increíble experiencia"
        author="Mark Gills"
        imageSrc="https://res.cloudinary.com/dyymism4o/image/upload/v1637491879/nextjs/testimonials/man1_v9buxc.jpg"
        review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, maxime? Sed dolores exercitationem numquam aspernatur rem omnis! Totam, libero quae."
      />
      <Card
        title="Muy buen trato"
        author="Gemma Peterson"
        imageSrc="https://res.cloudinary.com/dyymism4o/image/upload/v1637491879/nextjs/testimonials/girl1_jr6qee.jpg"
        review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, maxime? Sed dolores exercitationem numquam aspernatur rem omnis! Totam, libero quae."
      />
      <Card
        title="Al gusto"
        author="Alice Grin"
        imageSrc="https://res.cloudinary.com/dyymism4o/image/upload/v1637491879/nextjs/testimonials/girl2_ucwwp6.jpg"
        review="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, maxime? Sed dolores exercitationem numquam aspernatur rem omnis! Totam, libero quae."
      />
    </Flex>
  );
}
