import { Flex, Heading } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex
      w="100%"
      h="500px"
      px="36"
      py="16"
      bgImage="url(/banner-europe.png)"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="flex-end"
      justify="flex-start"
    >
      <Heading fontSize="5xl" fontWeight="semibold" color="gray.50">
        Europa
      </Heading>
    </Flex>
  );
}
