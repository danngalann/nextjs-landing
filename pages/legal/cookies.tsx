import Head from "next/head";
import type { NextPage } from "next";
import {
  Text,
  Box,
  Heading,
  ListItem,
  List,
  Link,
  ListIcon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Cookies: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJsFood - Política de cookies</title>
      </Head>
      <Box
        px={{ base: 8, md: 40, lg: 60 }}
        pt={10}
        w="full"
        textAlign="justify"
      >
        <Box mb={20}>
          <Heading as="h1" mb={4}>
            Política de cookies
          </Heading>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            Responsable del tratamiento
          </Heading>
          <Text>Lorem ipsum dolor sit amet.</Text>
          <Text>Calle del Peregrino 7, Cittàgazze</Text>
          <Text>NIF: 07624754R</Text>
          <Text>Teléfono: 645325697</Text>
          <Text mb={8}>Correo electrónico: cookies@example.com</Text>
          <Text mb={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            quasi recusandae. Tenetur veritatis aliquam aspernatur eum sint
            impedit voluptatum ea doloribus, atque suscipit sequi id in minima
            perferendis totam asperiores eos laudantium, similique quasi!
            Placeat unde fugiat in impedit magni.
          </Text>
          <Text mb={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            nobis laboriosam quo unde dolorum illum ducimus dicta sapiente id,
            obcaecati officiis numquam sunt est voluptates eum ipsa, excepturi
            nesciunt at, aperiam nostrum! Obcaecati beatae qui quos vel, sed
            harum maxime.
          </Text>
          <Text mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            eaque, vel dolore iusto nostrum sed optio quidem officia, numquam
            possimus, magnam laudantium odit repudiandae ipsam at laboriosam.
            Placeat, nostrum modi.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            asperiores sapiente error fuga, voluptas soluta repudiandae quod
            unde alias, quibusdam distinctio reprehenderit, atque excepturi
            assumenda numquam rerum facilis blanditiis tenetur ea illum! Atque
            maxime voluptatibus provident quis consequatur?
          </Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            ¿Qué son las Cookies?
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nihil ea culpa qui sint animi atque fugiat autem at ex consequatur
            veniam non, ducimus quidem perspiciatis tempora assumenda
            exercitationem. Dolores repudiandae reprehenderit velit odit
            deleniti quasi quidem atque laudantium maiores, voluptatem iure eum
            voluptate, tenetur facere quia. Aut sed obcaecati exercitationem
            illum consequuntur deleniti, voluptates quis, officiis fugit, eius
            placeat error! Itaque temporibus qui ullam quos quasi iste quae aut
            tempore eius? Ullam aut blanditiis, nihil tenetur rerum non sunt?
          </Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            ¿Qué tipos de cookies utiliza esta página web?
          </Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            adipisci consequatur, temporibus quae deleniti illo voluptas
            deserunt officiis sunt, eum, exercitationem natus dicta! Neque
            veniam, earum aliquid architecto consequatur deserunt incidunt
            dolores dolore nobis debitis autem optio blanditiis iste ea
            recusandae tempore magni? Alias ut facere pariatur excepturi eum
            sint illum dolore amet quo, voluptatibus iusto inventore deserunt at
            eius aliquam veniam cupiditate est, recusandae maxime temporibus eos
            cumque doloremque dolor aperiam? Minima aperiam ducimus beatae iste
            ullam asperiores et.
          </Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            ¿Quién utiliza la información almacenada en las Cookies?
          </Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus repellat harum explicabo repudiandae quibusdam et in
            tempore pariatur laborum error cumque, ipsa excepturi dolore eaque
            tempora alias. Suscipit totam porro quidem magnam vitae error itaque
            recusandae, ex reprehenderit aliquid aliquam repudiandae molestiae
            at accusantium, hic soluta. Deleniti quis corrupti dolore.
          </Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            ¿Durante cuánto tiempo mantendremos la información?
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            incidunt dicta libero vitae voluptate eos deserunt aut laboriosam
            distinctio velit, est, ducimus optio nam maiores, nisi voluptates
            odit doloribus exercitationem.
          </Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            ¿Cómo puede desactivar las cookies?
          </Heading>
          <Text mb={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            pariatur, beatae quaerat harum quidem similique reprehenderit
            blanditiis cupiditate porro nihil incidunt sint ipsam error,
            aliquid, delectus voluptatum deleniti illum. Sapiente, iste ratione
            pariatur odio reprehenderit officiis provident magni minima vero.
          </Text>
          <Text mb={4}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero
            earum nostrum laudantium id beatae iure placeat sed, ad accusantium
            reiciendis ipsam minus natus esse, mollitia obcaecati?
            Necessitatibus?
          </Text>
          <List mb={4} ml={4}>
            <ListItem>
              <ListIcon as={ExternalLinkIcon} />
              <Link
                target="_blank"
                href="http://support.google.com/chrome/bin/answer.py?hl=es&answer=95647"
              >
                Desactivar las Cookies en Chrome
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ExternalLinkIcon} />
              <Link
                target="_blank"
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              >
                Desactivar las Cookies en Edge
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ExternalLinkIcon} />
              <Link
                target="_blank"
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we&redirectlocale=es"
              >
                Desactivar las Cookies en Firefox
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={ExternalLinkIcon} />
              <Link target="_blank" href="http://support.apple.com/kb/ph5042">
                Desactivar las Cookies en Safari
              </Link>
            </ListItem>
          </List>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            veritatis sequi itaque fugit sit maiores vero, dicta expedita
            laboriosam obcaecati iure corporis quisquam eveniet iusto vel
            aspernatur rerum cum perspiciatis!
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            adipisci corrupti amet officia fugiat error est facere asperiores
            nisi eveniet assumenda ea, non ullam id quaerat veniam voluptate
            voluptates omnis dolore neque animi dicta. Voluptates repellat omnis
            voluptas placeat voluptatibus!
          </Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            Cambios en la Política de Cookies
          </Heading>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            nemo sint error expedita rem, dolor maiores! Eius voluptas, ipsa
            officia fugit nobis harum temporibus fugiat quidem delectus facere
            impedit repellat, deserunt, eum corporis enim consequuntur. Quas
            perspiciatis porro quae hic?
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Cookies;
