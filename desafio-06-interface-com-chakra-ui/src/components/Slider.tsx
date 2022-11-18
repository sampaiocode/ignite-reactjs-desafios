import Link from 'next/link';

import { Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

export function Slider() {
  return (
    <Flex w="100%" maxW="1240px" h="450px" mx="auto" mb="10" mt="12">
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
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            bgImage="url(/europe.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
            align="center"
            justify="center"
          >
            <Link href="/continent/europe">
              <Heading fontSize="5xl" fontWeight="bold" color="gray.50">
                Europa
              </Heading>
              <Text color="gray.100" fontSize="2xl" fontWeight="bold" mt="4">
                O continente mais antigo.
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            bgImage="url(/europe.png)"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            textAlign="center"
            align="center"
            justify="center"
          >
            <Link href="/continent/europe">
              <Heading fontSize="5xl" fontWeight="bold" color="gray.50">
                Europa
              </Heading>
              <Text color="gray.100" fontSize="2xl" fontWeight="bold" mt="4">
                O continente mais antigo.
              </Text>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
