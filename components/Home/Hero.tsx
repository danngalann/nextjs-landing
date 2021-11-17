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
                src="v1637164782/inserte/hero/back_faded_kco4jr.png"
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
                src="v1637164784/inserte/hero/middle_qlix8m.png"
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
                src="v1637164781/inserte/hero/front_x7eahl.png"
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
