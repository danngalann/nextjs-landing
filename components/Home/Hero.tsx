import React from "react";
import Image from "next/image";
import { Box, chakra } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ParallaxBanner } from "react-scroll-parallax";

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

      <ParallaxBanner
        layers={[
          {
            amount: 0.4,
            expanded: false,
            children: (
              <Image
                src="/img/hero/back_faded.png"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
              />
            ),
          },
          {
            amount: 0.3,
            expanded: false,
            children: (
              <Image
                src="/img/hero/middle.png"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
              />
            ),
          },
          {
            amount: 0.1,
            expanded: false,
            children: (
              <Image
                src="/img/hero/front.png"
                alt=""
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true}
              />
            ),
          },
        ]}
        style={{
          height: "60rem",
        }}
      ></ParallaxBanner>
      {/* <Box position="relative" w="full" height="80vh">
        <Image
          src="/img/hero/cold_mountain.jpg"
          alt="cold mountain"
          layout="fill"
          objectFit="cover"
        />
      </Box> */}
    </chakra.div>
  );
}