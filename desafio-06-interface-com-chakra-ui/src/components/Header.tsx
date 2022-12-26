import Link from 'next/link';
import { useRouter } from 'next/router';
import { Flex, Grid, Icon, Image } from '@chakra-ui/react';

import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const { asPath } = useRouter();
  const offHomePage = asPath !== '/';

  return (
    <Flex as="header" w="100%" h={['12', '24']} px="1rem" mx="auto" align="center" justify="center">
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
        <Image
          src="/logo.svg"
          alt="Logo do WordlTrip"
          w={['80px', '185px']}
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  );
}
