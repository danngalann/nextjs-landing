import type { NextPage } from "next";
import Head from "next/head";
import { Text, Box, Heading } from "@chakra-ui/react";

const Empresa: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJs Food - Empresa</title>
      </Head>
      <Box px={{ base: 8, md: 60 }} pt={10} w="full" textAlign="justify">
        <Box mb={20}>
          <Heading mb={4}>Nuestra empresa</Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            expedita cupiditate accusantium dignissimos voluptatibus labore
            rerum dolorem possimus optio quod, magni maxime repellendus. Quas,
            quam quisquam! Sapiente quia quis atque fuga, rem nulla sit nam
            reiciendis obcaecati sint dicta dolore iusto, ad molestias nesciunt
            facere aspernatur laborum beatae necessitatibus. A?
          </Text>
        </Box>
        <Box mb={20}>
          <Heading mb={4}>Nuestra historia</Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            assumenda unde officiis dolores, vitae eum minima ratione quae
            temporibus est maxime quisquam impedit atque quod voluptatum dolorum
            fuga quibusdam deleniti! Id qui, mollitia labore quas exercitationem
            laboriosam repellendus perferendis quia voluptates nemo asperiores
            repudiandae architecto at eius voluptas libero dolor, ab laudantium
            esse maiores, ad ea. Similique ipsum expedita minus.
          </Text>
        </Box>
        <Box mb={20}>
          <Heading mb={4}>Nuestras instalaciones</Heading>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            dolorem quia totam fuga rem corrupti, repellat assumenda delectus
            tempora amet magnam porro esse quaerat tempore ipsum aperiam
            expedita! Officia dolore, dolorem doloribus eveniet nobis iure earum
            reiciendis minima aliquam debitis blanditiis repellat explicabo!
            Deleniti, corporis!
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Empresa;
