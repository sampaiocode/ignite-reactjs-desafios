import { Flex } from '@chakra-ui/react';
import { Logo } from './Logo';

export function Header() {
  return (
    <Flex as="header" w="100%" h="24" align="center" justify="center">
      <Logo />
    </Flex>
  );
}
