import { Grid, Heading } from '@chakra-ui/react';
import { City } from './City';

export function Cities() {
  return (
    <>
      <Heading fontSize="4xl" fontWeight="medium" mb="10">
        Cidades +100
      </Heading>
      <Grid templateColumns="repeat(4, 1fr)" alignItems="center" justifyContent="center" gap="45px">
        <City />
        <City />
        <City />
        <City />
      </Grid>
    </>
  );
}
