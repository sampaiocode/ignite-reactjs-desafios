import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Head from 'next/head';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelType } from '../components/TravelType';
import { Slider } from '../components/Slider';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../services/prismic';

export interface HomeProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

export default function Home({ continents }: HomeProps) {
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
            mt={['9', '28']}
            templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
            justifyContent="space-between"
            alignItems="center"
            gap={[1, 5]}
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
            <GridItem colSpan={[2, 2, 2, 1]}>
              <TravelType iconName="earth" text="e mais..." />
            </GridItem>
          </Grid>

          <Box w={['60px', '90px']} h="2px" bg="gray.700" mx="auto" my={['9', '20']} />

          <Heading mt="12" fontSize={['lg', '3xl', '4xl']} fontWeight="500" textAlign="center">
            Vamos nessa? <br /> Então escolha seu continente
          </Heading>

          <Slider continents={continents} />
        </main>
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.getByType('continent');

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.slide_image.url
    };
  });

  return {
    props: {
      continents
    },
    revalidate: 1800 // 30 minutes
  };
};
