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
          <title>Congelados Inserte</title>
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
          <meta property="og:image" content="/img/hero/cold_mountain.jpg" />
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
