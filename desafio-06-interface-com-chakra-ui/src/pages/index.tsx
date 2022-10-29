import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

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
        </main>
      </Flex>
    </>
  );
}
