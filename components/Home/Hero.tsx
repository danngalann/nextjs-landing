import React from "react";
import Image from "next/image";
import { Box, chakra } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Snowfall = dynamic(
  () => {
    return import("react-snowfall");
  },
  { ssr: false }
);

export default function Hero() {
  return (
    <chakra.div>
      <Snowfall color="#E3F7FA" snowflakeCount={200} style={{ zIndex: 10 }} />

      <Box position="relative" w="full" height="80vh">
        <Image
          src="/img/hero/cold_mountain.jpg"
          alt="cold mountain"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </chakra.div>
  );
}
