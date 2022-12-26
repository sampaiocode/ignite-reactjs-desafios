import Link from 'next/link';

import { Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import { HomeProps } from '../pages';

export function Slider({ continents }: HomeProps) {
  return (
    <Flex w="100%" maxW="1240px" h={['250px', '450px']} mx="auto" mb={['5', '10']} mt={['5', '12']}>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000
        }}
        style={{ width: '100%', flex: '1' }}
      >
        {continents.map(continent => {
          return (
            <SwiperSlide key={continent.slug}>
              <Flex
                w="100%"
                h="100%"
                bgImage={`url(${continent.image})`}
                bgRepeat="no-repeat"
                bgSize="cover"
                bgPosition="center"
                textAlign="center"
                align="center"
                justify="center"
              >
                <Link href={`/continent/${continent.slug}`}>
                  <Heading fontSize={['2xl', '4xl', '5xl']} fontWeight="bold" color="gray.50">
                    {continent.title}
                  </Heading>
                  <Text color="gray.100" fontSize={['sm', '2xl']} fontWeight="bold" mt={['2', '4']}>
                    {continent.summary}
                  </Text>
                </Link>
              </Flex>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}
