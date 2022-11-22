import * as Popover from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

export function ButtonInfo() {
  return (
    <Popover.Popover>
      <Popover.PopoverTrigger>
        <span>
          <Popover.Icon
            as={RiInformationLine}
            w="16px"
            h="16px"
            cursor="pointer"
            color="gray.300"
          />
        </span>
      </Popover.PopoverTrigger>
      <Popover.PopoverContent bg="yellow.400" color="gray.600">
        <Popover.PopoverArrow bg="yellow.400" />
        <Popover.PopoverCloseButton />
        <Popover.PopoverBody fontSize="lg" fontWeight="normal">
          Paris, Europa, Chile, Canadá, China
        </Popover.PopoverBody>
      </Popover.PopoverContent>
    </Popover.Popover>
  );
}
