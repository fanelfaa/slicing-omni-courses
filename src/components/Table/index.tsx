import type { TableCellProps, TableColumnHeaderProps } from '@chakra-ui/react';
import { Td as ChakraTd, Th as ChakraTh } from '@chakra-ui/react';

export const Td = ({ children, ...props }: TableCellProps) => (
  <ChakraTd
    border="none"
    color="#414141"
    fontFamily="roboto"
    fontSize="16px"
    textTransform="capitalize"
    {...props}
  >
    {children}
  </ChakraTd>
);
export const Th = ({ children, ...props }: TableColumnHeaderProps) => (
  <ChakraTh
    py="20px"
    fontFamily="roboto"
    fontWeight="medium"
    fontSize="18px"
    color="#7A7A7A"
    textTransform="capitalize"
    {...props}
  >
    {children}
  </ChakraTh>
);
