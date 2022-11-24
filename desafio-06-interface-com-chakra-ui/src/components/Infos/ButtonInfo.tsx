import { RiInformationLine } from 'react-icons/ri';
import {
  Popover,
  PopoverTrigger,
  Icon,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody
} from '@chakra-ui/react';

export function ButtonInfo() {
  return (
    <Popover>
      <PopoverTrigger>
        <span>
          <Icon as={RiInformationLine} w="16px" h="16px" cursor="pointer" color="gray.300" />
        </span>
      </PopoverTrigger>
      <PopoverContent bg="yellow.400" color="gray.600">
        <PopoverArrow bg="yellow.400" />
        <PopoverCloseButton />
        <PopoverBody fontSize="lg" fontWeight="normal">
          Paris, Europa, Chile, Canadá, China
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
