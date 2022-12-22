import { Flex, Heading } from '@chakra-ui/react';
import { ContinentProps } from '../pages/continent/[slug]';

export function ContinentBanner({ continent }: ContinentProps) {
  return (
    <Flex
      w="100%"
      h="500px"
      px="36"
      py="16"
      bgImage={`url('${continent.banner}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="flex-end"
      justify="flex-start"
    >
      <Heading fontSize="5xl" fontWeight="semibold" color="gray.50">
        {continent.title}
      </Heading>
    </Flex>
  );
}
