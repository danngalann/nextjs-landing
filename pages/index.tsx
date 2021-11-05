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
import Cta from "../components/Home/Cta";
import Hero from "../components/Home/Hero";

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
      <Hero />
      <Box px={{ base: "none", md: 20 }} pt={10} w="full" bg={"gray.50"}>
        {/* <Carousel media={media} mediaByIndex={mediaByIndex} /> */}
        <Awm />
        <Heading w="full" textAlign="center">
          Lo que dicen de nosotros
        </Heading>
        <Testimonials />
        <Cta />
      </Box>
    </div>
  );
};

export default Home;
