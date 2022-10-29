import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex as="header" w="100%" h="24" px="1rem" mx="auto" align="center" justify="center">
      <Image src="/logo.svg" w="185px" alt="Logo do WordlTrip" />
    </Flex>
  );
}
