import { Box, HStack, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Link } from '@/components/Link';

type SideBarMenuProps = {
  icon?: ReactNode;
  name: string;
  to: string;
  active?: boolean;
  badge?: ReactNode;
};

const activeHoverStyle = {
  color: 'white',
  bgColor: 'primary',
  border: 'none',
};

export const SideBarMenu = ({
  name,
  to,
  active,
  icon,
  badge,
}: SideBarMenuProps) => (
  <Link href={to} w="full">
    <HStack
      _hover={activeHoverStyle}
      spacing="12px"
      px="23px"
      py="15px"
      borderRadius="12px"
      cursor="pointer"
      color={active ? 'white' : '#AEAEB1'}
      bgColor={active ? 'primary' : 'transparent'}
      transition="all .2s ease-in-out"
      pos="relative"
      role="group"
    >
      {icon}
      <Text
        fontWeight="medium"
        fontSize="16px"
        textTransform="capitalize"
        flex="1"
      >
        {name}
      </Text>
      <Box
        display="inline-block"
        pos="absolute"
        top="50%"
        right="0"
        transform="translate(0, -50%)"
        _groupHover={{ transform: 'translate(50%, -50%)' }}
        transition="all .2s cubic-bezier(0.6, -0.28, 0.74, 0.05)"
      >
        {badge}
      </Box>
    </HStack>
  </Link>
);
