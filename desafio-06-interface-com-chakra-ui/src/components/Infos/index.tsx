import { Flex, Heading, Text, Icon, Tooltip } from '@chakra-ui/react';

import { RiInformationLine } from 'react-icons/ri';
import { ContinentProps } from '../../pages/continent/[slug]';

export function Infos({ continent }: ContinentProps) {
  return (
    <Flex align="center" justify="space-between">
      <Flex direction="column" align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} fontWeight="semibold" color="yellow.400">
          {continent.countries}
        </Heading>
        <Text fontSize={['md', '2xl']} fontWeight="semibold" color="gray.600">
          países
        </Text>
      </Flex>

      <Flex direction="column" align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} fontWeight="semibold" color="yellow.400">
          {continent.languages}
        </Heading>
        <Text fontSize={['md', '2xl']} fontWeight="semibold" color="gray.600">
          línguas
        </Text>
      </Flex>

      <Flex direction="column" align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} fontWeight="semibold" color="yellow.400">
          {continent.cities < 10 ? (
            <Text>0{continent.cities}</Text>
          ) : (
            <Text>{continent.cities}</Text>
          )}
        </Heading>

        <Flex align="center" gap="5px">
          <Text fontSize={['md', '2xl']} fontWeight="semibold" color="gray.600">
            cidades +100
          </Text>

          <Tooltip
            hasArrow
            label="As cidades que estão entre as 100 mais visitadas do mundo."
            bg="gray.600"
            color="yellow.400"
          >
            <span>
              <Icon
                as={RiInformationLine}
                w={['10px', '16px']}
                h={['10px', '16px']}
                cursor="pointer"
                color="gray.300"
              />
            </span>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
}
