import { Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex bgImage="url('/banner.png')" w="100%" h="335px" bgRepeat="no-repeat" bgSize="cover">
      <Flex w="100%" px="36" mx="auto" align="center" justify="space-between">
        <div>
          <Heading color="gray.50" fontWeight="medium" fontSize="4xl" lineHeight="">
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text color="gray.100" fontSize="xl" mt="5" maxW="524px">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>

        <Image
          src="/airplane.svg"
          w="417px"
          alt="Imagem de um avião amarelo voando"
          transform="rotate(3deg) translateY(56px)"
        />
      </Flex>
    </Flex>
  );
}
