import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const Card = ({
  imageSrc,
  title,
  review,
  author,
}: {
  imageSrc: string;
  title: string;
  review: string;
  author: string;
}) => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box w="md" mx="auto" py={4} px={8} bg="white" shadow="lg" rounded="lg">
        <Flex justifyContent={{ base: "center", md: "end" }} mt={-16}>
          <Image
            w={20}
            h={20}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            borderWidth={2}
            borderColor="brand.500"
            alt="Testimonial avatar"
            src={imageSrc}
          />
        </Flex>

        <chakra.h2
          color="gray.800"
          fontSize={{ base: "2xl", md: "3xl" }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          {title}
        </chakra.h2>

        <chakra.p mt={2} color="gray.600">
          {review}
        </chakra.p>

        <Flex justifyContent="end" mt={4}>
          <chakra.p fontSize="xl" color="brand.500">
            {author}
          </chakra.p>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Card;
