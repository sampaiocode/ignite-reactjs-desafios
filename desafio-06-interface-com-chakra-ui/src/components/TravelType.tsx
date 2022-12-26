import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface TypeProps {
  iconName: string;
  text: string;
}

export function TravelType({ iconName, text }: TypeProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  });

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isMobile ? (
        <Image src={`/icons/${iconName}.svg`} w="85px" h="85px" mb="6" />
      ) : (
        <Text fontSize="4xl" color="yellow.400" mr="2">
          •
        </Text>
      )}
      <Text fontSize={['md', 'xl', '2xl']} color="gray.600" fontWeight="semibold">
        {text}
      </Text>
    </Flex>
  );
}
