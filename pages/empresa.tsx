import type { NextPage } from "next";
import Head from "next/head";
import { Text, Box, Heading } from "@chakra-ui/react";

const Empresa: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Congelados Inserte - Empresa</title>
      </Head>
      <Box px={{ base: 8, md: 60 }} pt={10} w="full" textAlign="justify">
        <Box mb={20}>
          <Heading mb={4}>Nuestra empresa</Heading>
          <Text>
            Nuestro equipo humano esta formado por 33 profesionales debidamente
            cualificados, donde nos esforzamos a diario para mejorar y conseguir
            la confianza de nuestros clientes. Especializados en el canal Horeca
            (hostelería, restauración y catering), tenemos la mejor selección de
            productos para satisfacer las necesidades del cliente mas exigente.
            La logística cuenta con un total de 21 vehículos propios con el que
            cubrimos toda la provincia de Barcelona y Gerona, nuestros vehículos
            de reparto vienen incorporados con placas eutécticas, actualmente el
            mejor sistema de frío que existe para el servicio de producto
            congelado, asegurando la temperatura bajo cero (-20º ) garantizar la
            cadena de frío y entregar a nuestros clientes el producto en las
            mejores condiciones.
          </Text>
        </Box>
        <Box mb={20}>
          <Heading mb={4}>Nuestra historia</Heading>
          <Text>
            Después de una larga trayectoria y experiencia en el mundo de la
            distribución de alimentos congelados en otras compañías, fue en 1979
            cuando decidimos crear Congelados Inserte, gracias a la confianza
            depositada por nuestros clientes y a nuestro trabajo hemos
            conseguido crear lo que hoy es una sólida realidad.
          </Text>
        </Box>
        <Box mb={20}>
          <Heading mb={4}>Nuestras instalaciones</Heading>
          <Text>
            Actualmente contamos con unas modernas instalaciones perfectamente
            ubicadas en Granollers-Barcelona, junto a la autopista Ap-7, para
            poder dar un excelente y rápido servicio, además de 17.000 m3. de
            cámara frigorífica y capacidad para 3.000 palets, lo que nos permite
            tener un gran surtido de productos, así como capacidad para alquiler
            de frío.
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Empresa;
