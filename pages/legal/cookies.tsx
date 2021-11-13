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
        <title>Congelados Inserte - Política de cookies</title>
      </Head>
      <Box px={{ base: 8, md: 40, lg: 60 }} pt={10} w="full" textAlign="justify">
        <Box mb={20}>
          <Heading as="h1" mb={4}>
            Política de cookies
          </Heading>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            Responsable del tratamiento
          </Heading>
          <Text>CONGELADOS INSERTE, S.L.</Text>
          <Text>
            Avenida Europa, 31 Polígono Ind Palou Nord · 08401 Granollers
          </Text>
          <Text>NIF: B-08898595</Text>
          <Text>Teléfono: 93 849 55 72</Text>
          <Text mb={8}>Correo electrónico: inserte@inserte.com</Text>
          <Text mb={4}>
            En la presente política de cookies, encontrará la descripción y
            finalidad de cada una de las cookies utilizadas, así como su nombre,
            el servidor de envío, su caducidad y en algunos casos la existencia
            de transferencia internacional de datos.
          </Text>
          <Text mb={4}>
            La legitimación para el uso de las cookies estrictamente
            funcionales, viene dada por que el tratamiento es necesario para el
            cumplimiento de una obligación legal, conforme la ley 34/2002 (Ley
            de Servicios de la Sociedad de la Información y de Comercio
            Electrónico).
          </Text>
          <Text mb={4}>
            La legitimación para el uso de las cookies con fines analíticos, de
            optimización, de personalización, de publicidad comportamental y
            valoración, está basado en el consentimiento que se le ha
            solicitado, conforme al Art. 6.1.a) del Reglamento (UE) 2016/679.
          </Text>
          <Text>
            Utilizamos cookies con el objetivo de prestar un mejor servicio y
            proporcionarte una mejor experiencia en tu navegación. Queremos
            informarte de manera clara y precisa sobre las cookies que
            utilizamos, detallando a continuación, qué es una cookie, para qué
            sirve, qué tipos de cookies utilizamos, cuáles son su finalidad y
            cómo puedes configurarlas o deshabilitarlas si así lo deseas.
          </Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            ¿Qué son las Cookies?
          </Heading>
          <Text>
            Cookie es un fichero que se descarga en su ordenador al acceder a la
            mayoría de las páginas Web. Las cookies permiten a una página web,
            entre otras cosas, almacenar y recuperar información sobre los
            hábitos de navegación de un usuario o de su equipo y, dependiendo de
            la información que contengan y de la forma en que utilice su equipo,
            pueden utilizarse para reconocer al usuario. Cuando acceda a una web
            que utiliza cookies, la web hace que el navegador cree en su equipo
            (ordenador, tableta, teléfono o similar) pequeños ficheros con
            información necesaria para el funcionamiento de la Web. Estos
            ficheros denominados cookies, forman parte de la tecnología
            necesaria para el correcto funcionamiento del sitio web. Las cookies
            no contienen ninguna clase de información personal específica, y la
            mayoría de las mismas se borran del disco duro al finalizar la
            sesión del navegador (las denominadas cookies de sesión) si bien su
            historial de navegación y cookies se almacenan en su equipo. Las
            cookies, de forma similar al historial de navegación o caché del
            navegador, pueden dejar un rastro sobre su actividad en línea. Esto
            es especialmente importante si otras personas pueden acceder a su
            equipo. Por lo que en el caso de que esté utilizando un equipo
            compartido, le recomendamos que antes de cerrar la sesión elimine la
            información sobre el historial de navegación, caché y cookies.
          </Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            ¿Qué tipos de cookies utiliza esta página web?
          </Heading>
          <Text>Ninguna. No usamos cookies en este dominio.</Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            ¿Quién utiliza la información almacenada en las Cookies?
          </Heading>
          <Text>
            Nadie. Al no haber cookies no se almacena ni se trata información.
          </Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            ¿Durante cuánto tiempo mantendremos la información?
          </Heading>
          <Text>
            Al no haber cookies no se almacena ni se trata información.
          </Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            ¿Cómo puede desactivar las cookies?
          </Heading>
          <Text mb={4}>
            En el panel de configuración de Cookies accesible en todo momento en
            nuestra Plataforma podrás obtener toda la información sobre las
            Cookies utilizadas en esta Web, junto con la información sobre el
            propósito, duración y gestión (propia o por terceros) de cada una de
            ellas, para que puedas gestionar la activación y desactivación del
            uso de aquellas Cookies que no son estrictamente necesarias para el
            funcionamiento de la Web.
          </Text>
          <Text mb={4}>
            Alternativamente, en caso de que estés navegando por internet,
            puedes deshabilitar en tu navegador el uso de Cookies. Te indicamos
            la manera de realizarlo en los navegadores más populares:
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
            Esta posibilidad de evitar el uso de Cookies puede ser llevada a
            cabo en cualquier momento.
          </Text>
          <Text>
            Por favor, ten en cuenta que tanto tu gestión del panel de
            configuración de Cookies, como tu opción de rechazar las Cookies es
            específica para cada navegador que estés utilizando. Por lo tanto,
            si optas por configurar las Cookies de una forma en un dispositivo y
            deseas que tu opción se aplique de manera similar a otro
            dispositivo, deberás activar la misma opción para ese otro
            dispositivo.
          </Text>
        </Box>
        <Box mb={20}>
          <Heading as="h2" size="md" mb={4}>
            Cambios en la Política de Cookies
          </Heading>
          <Text>
            a presente Política de Cookies, se podrá modificar cuando así lo
            exija la legislación vigente en cada momento o cuando hubiera alguna
            variación en el tipo de cookies utilizadas en el sitio web. Por
            ello, te recomendamos revisar esta política cada vez que accedas a
            nuestro sitio web con el objetivo de estar adecuadamente informado
            sobre cómo y para qué usamos las cookies.
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Cookies;
