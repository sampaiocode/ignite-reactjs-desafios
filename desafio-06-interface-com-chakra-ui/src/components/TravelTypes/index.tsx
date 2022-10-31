import { Grid, GridItem } from '@chakra-ui/react';
import { TravelType } from './TravelType';

export function TravelTypes() {
  return (
    <Grid
      maxW="1160px"
      w="100%"
      mx="auto"
      mt="32"
      templateColumns="repeat(5, 1fr)"
      justifyContent="space-between"
      alignItems="center"
      gap="5"
    >
      <GridItem>
        <TravelType iconName="cocktail" text="vida noturna" />
      </GridItem>

      <GridItem>
        <TravelType iconName="surf" text="praia" />
      </GridItem>

      <GridItem>
        <TravelType iconName="building" text="moderna" />
      </GridItem>

      <GridItem>
        <TravelType iconName="museum" text="clássico" />
      </GridItem>

      <GridItem>
        <TravelType iconName="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
}
