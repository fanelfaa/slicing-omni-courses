import type { BoxProps } from '@chakra-ui/react';
import {
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Bagde,
  IconBarChart,
  IconBook,
  IconHome,
  IconMessage,
  IconPieChart,
  IconSetting,
  ImageLogo,
} from '@/components';
import { SideBarMenu } from '@/components/SideBar';

export const SideBar = (props: BoxProps) => {
  const router = useRouter();

  return (
    <Box
      w={{ base: 0, md: '272px' }}
      bg="white"
      h="100vh"
      px="34px"
      pt="20px"
      overflowY="auto"
      {...props}
    >
      <Link href="/">
        <HStack as="a" spacing="13px" mb="58px" py="8px">
          <ImageLogo />
          <Heading color="#121318" fontWeight="bold" fontSize="24px">
            Omni.
          </Heading>
        </HStack>
      </Link>
      <Text color="#3C3E43" fontWeight="medium" fontSize="16px" mb="18px">
        Menu
      </Text>
      <VStack spacing="5px" mb="26px">
        {[
          {
            name: 'overview',
            to: '/overview',
            icon: <IconHome boxSize="24px" />,
          },
          {
            name: 'courses',
            to: '/courses',
            icon: <IconBook boxSize="24px" />,
          },
          {
            name: 'planning',
            to: '/planning',
            icon: <IconPieChart boxSize="24px" />,
          },
          {
            name: 'statistics',
            to: '/statistics',
            icon: <IconBarChart boxSize="24px" />,
          },
        ].map((menu) => (
          <SideBarMenu
            key={menu.to}
            name={menu.name}
            to={menu.to}
            icon={menu.icon}
            active={router.pathname === menu.to}
          />
        ))}
      </VStack>
      <Divider mb="44px" />
      <Text color="#3C3E43" fontWeight="medium" fontSize="16px" mb="18px">
        Account
      </Text>
      <VStack spacing="5px" mb="26px">
        {[
          {
            name: 'messages',
            to: '/messages',
            icon: <IconMessage boxSize="24px" />,
            badge: <Bagde text="5" />,
          },
          {
            name: 'setting',
            to: '/setting',
            icon: <IconSetting boxSize="24px" />,
          },
        ].map(({ to, name, icon, badge }) => (
          <SideBarMenu
            key={to}
            name={name}
            to={to}
            icon={icon}
            active={router.pathname === to}
            badge={badge}
          />
        ))}
      </VStack>
      <Center>
        <Box h="138px" w="142px" bgColor="#F0F7FF" borderRadius="14px"></Box>
      </Center>
    </Box>
  );
};
