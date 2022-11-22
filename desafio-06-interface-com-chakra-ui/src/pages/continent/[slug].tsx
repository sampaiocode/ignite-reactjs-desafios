import { Flex, Grid, Text } from '@chakra-ui/react';

import { ContinentBanner } from '../../components/ContinentBanner';
import { Header } from '../../components/Header';
import { Infos } from '../../components/Infos';

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex maxW="1160px" mx="auto" px="1rem" direction="column">
        <Grid templateColumns="1.2fr 1fr" my="20" gap={20}>
          <Text fontSize="2xl" color="gray.600" textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península
            ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de
            águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>

          <Infos />
        </Grid>
      </Flex>
    </Flex>
  );
}
