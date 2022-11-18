import { Flex, Image, Text } from '@chakra-ui/react';

interface TypeProps {
  iconName: string;
  text: string;
}

export function TravelType({ iconName, text }: TypeProps) {
  return (
    <Flex direction="column" align="center" justify="center">
      <Image src={`/icons/${iconName}.svg`} w="85px" h="85px" mb="6" />
      <Text fontSize="2xl" color="gray.600" fontWeight="semibold">
        {text}
      </Text>
    </Flex>
  );
}
