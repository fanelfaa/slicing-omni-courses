import type { BoxProps } from '@chakra-ui/react';
import {
  Avatar,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import { IconBell, IconMessage, IconSearch, Link } from '@/components';

export const Header = (props: BoxProps) => {
  return (
    <HStack
      justifyContent="space-between"
      h="89px"
      bg="white"
      px="39px"
      shadow="sm"
      {...props}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <IconSearch boxSize={19} />
        </InputLeftElement>
        <Input
          h="40px"
          placeholder="Search or type"
          _placeholder={{ color: '9A9FA5' }}
          w="360px"
          borderRadius="12px"
          variant="filled"
        />
      </InputGroup>
      <HStack spacing="24px">
        <IconButton
          variant="ghost"
          aria-label="Message"
          icon={<IconMessage boxSize={24} />}
        />
        <IconButton
          variant="ghost"
          aria-label="Notification"
          icon={<IconBell boxSize={24} />}
        />
        <Link href="/profile">
          <Avatar boxSize="48px" />
        </Link>
      </HStack>
    </HStack>
  );
};
