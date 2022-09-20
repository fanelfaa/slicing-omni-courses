import { Avatar, Box, Heading, HStack, Progress, Text } from '@chakra-ui/react';
import Image from 'next/image';

import {
  IconCheckShield,
  IconFile,
  IconLevel1,
  IconLevel2,
  IconLevel3,
  IconUsers,
} from '../Icons';
import { Link } from '../Link';

type LevelProps = {
  level: 'beginner' | 'intermediate' | 'advance';
};
const Level = ({ level }: LevelProps) => (
  <HStack
    spacing="8px"
    pos="absolute"
    bg="white"
    bottom="9px"
    left="12px"
    h="25px"
    px="8px"
    borderRadius="12.5px"
    alignItems="center"
  >
    <Text
      as="div"
      fontSize="12px"
      fontWeight="medium"
      fontFamily="roboto"
      color="#303030"
      textTransform="capitalize"
    >
      {level}
    </Text>
    {level === 'beginner' && <IconLevel1 boxSize="12px" />}
    {level === 'intermediate' && <IconLevel2 boxSize="12px" />}
    {level === 'advance' && <IconLevel3 boxSize="12px" />}
  </HStack>
);

export type CardCourseItemProps = {
  name: string;
  author: string;
  complete: number;
} & LevelProps;

export const CardCourseItem = (props: CardCourseItemProps) => {
  return (
    <Box borderRadius="16px" p="12px" bg="white">
      <Box borderRadius="12px" pos="relative" h="132px" bg="brown" mb="12px">
        <Box
          as={Image}
          src="/assets/images/cover-1.png"
          height="132px"
          alt="cover-1"
          layout="fill"
          borderRadius="12px"
        />
        <Level level={props.level} />
      </Box>
      <Box p="6px">
        <Link href="#">
          <Heading
            fontFamily="roboto"
            fontSize="16px"
            fontWeight="medium"
            mb="12px"
            color="#313134"
            _hover={{ color: 'primary' }}
            transition="color .2s ease-in-out"
          >
            {props.name}
          </Heading>
        </Link>
        <Box
          display="inline-flex"
          cursor="pointer"
          columnGap="8px"
          mb="16px"
          role="group"
          alignItems="center"
        >
          <Avatar size="sm" boxSize="25px" />
          <Text
            as="span"
            color="#7A7A88"
            fontSize="12px"
            fontWeight="medium"
            _groupHover={{ color: 'black' }}
          >
            {props.author}
          </Text>
        </Box>
        <HStack justifyContent="space-around" color="#6D6D6F" mb="15px">
          <HStack flex="1" justifyContent="center" spacing="5px">
            <IconFile boxSize="14px" />
            <Text
              as="span"
              fontFamily="roboto"
              fontSize="12px"
              fontWeight="medium"
            >
              26
            </Text>
          </HStack>
          <HStack
            borderRight="1px solid #EFEFEF"
            borderLeft="1px solid #EFEFEF"
            flex="1"
            justifyContent="center"
            spacing="5px"
          >
            <IconCheckShield boxSize="14px" />
            <Text
              as="span"
              fontFamily="roboto"
              fontSize="12px"
              fontWeight="medium"
            >
              9
            </Text>
          </HStack>
          <HStack flex="1" justifyContent="center" spacing="5px">
            <IconUsers boxSize="14px" />
            <Text
              as="span"
              fontFamily="roboto"
              fontSize="12px"
              fontWeight="medium"
            >
              30
            </Text>
          </HStack>
        </HStack>
        <Progress
          value={props.complete}
          h="7px"
          borderRadius="3.5px"
          colorScheme="gray"
          mb="11px"
        />
        <HStack
          justifyContent="space-between"
          color="#9A9FA5"
          fontWeight="medium"
          fontFamily="roboto"
          fontSize="12px"
        >
          <Text as="span">Completed: {props.complete}%</Text>
          <Text as="span">Days: 4/12</Text>
        </HStack>
      </Box>
    </Box>
  );
};
