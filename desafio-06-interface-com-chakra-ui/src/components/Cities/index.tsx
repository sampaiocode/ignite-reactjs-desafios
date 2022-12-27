import { Grid, Heading } from '@chakra-ui/react';
import { City } from './City';

import { ContinentProps } from '../../pages/continent/[slug]';

export function Cities({ continent }: ContinentProps) {
  return (
    <>
      <Heading fontSize={['2xl', '4xl']} fontWeight="medium" mb="10">
        Cidades +100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        px={['30px', '0']}
        alignItems="center"
        justifyContent="center"
        gap={['20px', '45px']}
      >
        {continent.cities100.map(city => (
          <City
            key={city.name}
            name={city.name}
            country={city.country}
            city_image={city.city_image}
            country_flag={city.country_flag}
          />
        ))}
      </Grid>
    </>
  );
}
