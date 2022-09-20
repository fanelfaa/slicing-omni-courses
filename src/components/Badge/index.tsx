import type { BoxProps } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

export const Bagde = (props: BoxProps & { text?: string }) => (
  <Box
    bg="#F76519"
    boxSize="30px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    color="white"
    fontWeight="medium"
    fontSize="16px"
    borderRadius="full"
  >
    {props.children ?? props.text}
  </Box>
);
