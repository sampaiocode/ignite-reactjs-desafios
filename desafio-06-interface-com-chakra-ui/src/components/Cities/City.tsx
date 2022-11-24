import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';

export function City() {
  return (
    <Box overflow="hidden" borderRadius="4px">
      <Image src="/paris.jpg" h="170px" w="100%" />

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
            Paris
          </Heading>
          <Text fontSize="md" color="gray.300" mt="3">
            França
          </Text>
        </Flex>

        <Image src="/france-flag.png" h="30px" w="30px" borderRadius="50%" objectFit="cover" />
      </Flex>
    </Box>
  );
}
