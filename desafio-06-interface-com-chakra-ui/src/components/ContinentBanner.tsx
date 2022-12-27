import { Flex, Heading } from '@chakra-ui/react';
import { ContinentProps } from '../pages/continent/[slug]';

export function ContinentBanner({ continent }: ContinentProps) {
  return (
    <Flex
      w="100%"
      h={['150px', '300px', '500px']}
      px={['0', '0', '36']}
      py={['0', '0', '16']}
      bgImage={`url('${continent.banner}')`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align={['center', 'center', 'flex-end']}
      justify={['center', 'center', 'flex-start']}
    >
      <Heading fontSize={['1.75rem', '5xl']} fontWeight="semibold" color="gray.50">
        {continent.title}
      </Heading>
    </Flex>
  );
}
