import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Head from 'next/head';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelType } from '../components/TravelType';
import { Slider } from '../components/Slider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <Header />

        <main>
          <Banner />

          <Grid
            maxW="1160px"
            w="100%"
            mx="auto"
            mt="32"
            templateColumns="repeat(5, 1fr)"
            justifyContent="space-between"
            alignItems="center"
            gap="5"
          >
            <GridItem>
              <TravelType iconName="cocktail" text="vida noturna" />
            </GridItem>
            <GridItem>
              <TravelType iconName="surf" text="praia" />
            </GridItem>
            <GridItem>
              <TravelType iconName="building" text="moderna" />
            </GridItem>
            <GridItem>
              <TravelType iconName="museum" text="clássico" />
            </GridItem>
            <GridItem>
              <TravelType iconName="earth" text="e mais..." />
            </GridItem>
          </Grid>

          <Box w="90px" h="2px" bg="gray.700" mx="auto" mt="20" />

          <Heading mt="12" fontSize="4xl" fontWeight="500" textAlign="center">
            Vamos nessa? <br /> Então escolha seu continente
          </Heading>

          <Slider />
        </main>
      </Flex>
    </>
  );
}
