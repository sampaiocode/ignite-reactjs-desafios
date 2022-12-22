import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import { Flex, Grid, Text } from '@chakra-ui/react';
import { getPrismicClient } from '../../services/prismic';

import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';
import { Infos } from '../../components/Infos';
import { Cities } from '../../components/Cities';

type City = {
  name: string;
  country: string;
  city_image: {
    url: string;
  };
  country_flag: {
    url: string;
  };
};

export interface ContinentProps {
  continent: {
    slug: string;
    title: string;
    description: string;
    banner: string;
    countries: number;
    languages: number;
    cities: number;
    cities100: {
      name: string;
      country: string;
      city_image: string;
      country_flag: string;
    }[];
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.title} | WorldTrip</title>
      </Head>

      <Flex direction="column">
        <Header />
        <ContinentBanner continent={continent} />

        <Flex maxW="1160px" mx="auto" mb="10" px="1rem" direction="column">
          <Grid templateColumns="1.2fr 1fr" my="20" gap={20}>
            <Text fontSize="2xl" color="gray.600" textAlign="justify">
              {continent.description}
            </Text>

            <Infos continent={continent} />
          </Grid>

          <Cities continent={continent} />
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const prismic = getPrismicClient();
  const response = await prismic.getByUID('continent', String(slug), {});

  const continent = {
    slug: response.uid,
    title: response.data.title,
    description: response.data.description,
    banner: response.data.banner_image.url,
    countries: response.data.countries,
    languages: response.data.languages,
    cities: response.data.cities,
    cities100: response.data.cities100.map((city: City) => {
      return {
        name: city.name,
        country: city.country,
        city_image: city.city_image.url,
        country_flag: city.country_flag.url
      };
    })
  };

  return {
    props: {
      continent
    },
    revalidate: 1800 // 30 minutes
  };
};
