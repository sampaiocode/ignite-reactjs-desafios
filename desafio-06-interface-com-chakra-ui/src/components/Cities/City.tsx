import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

interface CityProps {
  name: string;
  country: string;
  city_image: string;
  country_flag: string;
}

export function City({ name, country, city_image, country_flag }: CityProps) {
  return (
    <Box overflow="hidden" borderRadius="4px">
      <Image src={city_image} h="170px" w="100%" />

      <Flex
        p="6"
        bg="white"
        border="1px"
        borderColor="yellow.400"
        borderTop="0"
        align="center"
        justify="space-between"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="semibold">
            {name}
          </Heading>
          <Text fontSize="md" color="gray.300" mt="3">
            {country}
          </Text>
        </Flex>

        <Image src={country_flag} h="30px" w="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
  );
}
