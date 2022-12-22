import { Grid, Heading } from '@chakra-ui/react';
import { City } from './City';

import { ContinentProps } from '../../pages/continent/[slug]';

export function Cities({ continent }: ContinentProps) {
  return (
    <>
      <Heading fontSize="4xl" fontWeight="medium" mb="10">
        Cidades +100
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" alignItems="center" justifyContent="center" gap="45px">
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
