import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Flex, Grid, Icon, Image } from '@chakra-ui/react';

import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const { asPath } = useRouter();
  const offHomePage = asPath !== '/';

  return (
    <>
      <Head>
        <title>Europe | WorldTrip</title>
      </Head>

      <Flex as="header" w="100%" h="24" px="1rem" mx="auto" align="center" justify="center">
        <Grid
          w="100%"
          h="100%"
          maxW="1160px"
          mx="auto"
          templateColumns="repeat(3, 1fr)"
          alignItems="center"
          justifyContent="center"
          alignSelf="start"
        >
          {offHomePage && (
            <Link href="/">
              <Icon as={RiArrowLeftSLine} fontSize="40" justifySelf="start" />
            </Link>
          )}

          <Image src="/logo.svg" w="185px" alt="Logo do WordlTrip" justifySelf="center" />
        </Grid>
      </Flex>
    </>
  );
}