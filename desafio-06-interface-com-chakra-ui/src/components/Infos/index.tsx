import { Flex, Heading, Text } from '@chakra-ui/react';
import { ButtonInfo } from './ButtonInfo';

import { ContinentProps } from '../../pages/continent/[slug]';

export function Infos({ continent }: ContinentProps) {
  return (
    <Flex align="center" justify="space-between">
      <Flex direction="column" align="center">
        <Heading fontSize="5xl" fontWeight="semibold" color="yellow.400">
          {continent.countries}
        </Heading>
        <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
          países
        </Text>
      </Flex>

      <Flex direction="column" align="center">
        <Heading fontSize="5xl" fontWeight="semibold" color="yellow.400">
          {continent.languages}
        </Heading>
        <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
          línguas
        </Text>
      </Flex>

      <Flex direction="column" align="center">
        <Heading fontSize="5xl" fontWeight="semibold" color="yellow.400">
          {continent.cities}
        </Heading>

        <Flex align="center" gap="5px">
          <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
            cidades +100
          </Text>

          <ButtonInfo />
        </Flex>
      </Flex>
    </Flex>
  );
}
