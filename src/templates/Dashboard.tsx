import { Box, HStack } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { useScrollDirection } from '@/hooks';
import { Header } from '@/layouts/Header';
import { SideBar } from '@/layouts/SideBar';

type IDashboardProps = {
  meta?: ReactNode;
  children: ReactNode;
};

export const DashboardLayout = (props: IDashboardProps) => {
  const { isScrollDown } = useScrollDirection();

  return (
    <>
      {props.meta}
      <HStack w="full" alignItems="flex-start" spacing="0" pos="relative">
        <SideBar pos="fixed" top="0" left="0" zIndex="101" />
        <Box flex="1" pos="relative">
          <Header
            pos="fixed"
            top={isScrollDown ? '-89px' : '0'}
            left="272px"
            right="0"
            transition="top .5s ease-in-out"
            shadow="md"
            zIndex="100"
          />
          <Box pl="272px" pt="89px" w="full" minH="100vh">
            {props.children}
          </Box>
        </Box>
      </HStack>
    </>
  );
};
