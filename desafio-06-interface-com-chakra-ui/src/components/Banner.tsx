import { Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      bgImage="url('/banner.png')"
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      bgRepeat="no-repeat"
      bgPosition={['100% 20%', '10% 20%', '100% 30%']}
      bgSize="cover"
    >
      <Flex
        w="100%"
        px={['4', '10', '15', '20', '36']}
        mx="auto"
        align="center"
        justify={['center', 'space-between']}
      >
        <div>
          <Heading
            color="gray.50"
            fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}
            fontWeight="medium"
          >
            3 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text
            color="gray.100"
            fontSize={['0.875rem', 'xl']}
            mt="5"
            maxW={['100%', '100%', '524px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>

        <Image
          src="/airplane.svg"
          alt="Imagem de um avião amarelo voando"
          w={['300px', '300px', '300px', '417px']}
          ml="8"
          display={['none', 'none', 'block']}
          transform="rotate(3deg) translateY(56px)"
        />
      </Flex>
    </Flex>
  );
}
