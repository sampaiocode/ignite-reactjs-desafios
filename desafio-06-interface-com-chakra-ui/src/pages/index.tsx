import { Flex } from '@chakra-ui/react';
import Head from 'next/head';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

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
          <TravelTypes />
        </main>
      </Flex>
    </>
  );
}
