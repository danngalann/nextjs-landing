import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Header/Navbar";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ParallaxProvider>
        <Navbar />
        <Component {...pageProps} />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export default MyApp;
