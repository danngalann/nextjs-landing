import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Header/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";
import Head from "next/head";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ParallaxProvider>
        <Head>
          <title>NextJs Food</title>
          <meta
            name="description"
            content="Productos congelados para todo tipo de empresas y negocios"
          />
          <meta
            property="og:title"
            content="Productos congelados para todo tipo de empresas y negocios"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Consigue productos congelados de calidad al mejor precio para tu negocio. Carnes, verduras, postres... Todo está a tu alcance."
          />
          <meta property="og:image" content="https://res.cloudinary.com/dyymism4o/image/upload/v1637164790/nextjs/hero/cold_mountain_iu0pfm.jpg" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default MyApp;
