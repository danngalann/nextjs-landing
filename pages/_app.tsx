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
            content="Empresa de congelados en granollers"
          />
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
