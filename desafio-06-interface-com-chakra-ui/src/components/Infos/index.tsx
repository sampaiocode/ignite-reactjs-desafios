import { Flex, Heading, Text } from '@chakra-ui/react';
import { ButtonInfo } from './ButtonInfo';

export function Infos() {
  return (
    <Flex align="center" justify="space-between">
      <Flex direction="column" align="center">
        <Heading fontSize="5xl" fontWeight="semibold" color="yellow.400">
          50
        </Heading>
        <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
          países
        </Text>
      </Flex>

      <Flex direction="column" align="center">
        <Heading fontSize="5xl" fontWeight="semibold" color="yellow.400">
          60
        </Heading>
        <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
          línguas
        </Text>
      </Flex>

      <Flex direction="column" align="center">
        <Heading fontSize="5xl" fontWeight="semibold" color="yellow.400">
          27
        </Heading>
        <Text fontSize="2xl" fontWeight="semibold" color="gray.600">
          cidades +100
          <ButtonInfo />
        </Text>
      </Flex>
    </Flex>
  );
}
