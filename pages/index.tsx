import type { NextPage } from "next";
import Head from "next/head";

import Carousel from "../components/Common/Carousel";
import {
  media,
  mediaByIndex,
} from "../components/Home/Carousel/HomeCarouselMedia";
import Awm from "../components/Home/AlternativeWithMedia";
import { Heading, Box } from "@chakra-ui/react";
import Testimonials from "../components/Home/Testimonials/Testimonials";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Congelados Inserte</title>
        <meta
          name="description"
          content="Empresa de congelados en granollers"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box px={{ base: "none", md: 20 }} pt={10} w="full">
        <Carousel media={media} mediaByIndex={mediaByIndex} />
        <Awm />
        <Heading w="full" textAlign="center">Lo que dicen de nosotros</Heading>
        <Testimonials />
      </Box>
    </div>
  );
};

export default Home;
