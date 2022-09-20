import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Text,
  Thead,
  Tr,
} from '@chakra-ui/react';

import type { CardCourseItemProps } from '@/components';
import { CardCourseItem, Td, Th } from '@/components';
import { Meta } from '@/layouts/Meta';
import { DashboardLayout } from '@/templates';

export default function CoursesPage() {
  const courses: CardCourseItemProps[] = [
    {
      name: 'UI Styleguide With Figma',
      level: 'intermediate',
      complete: 50,
      author: 'Jhonatan Due',
    },
    {
      name: 'Interectoin design With Figma',
      level: 'beginner',
      complete: 75,
      author: 'Killan James',
    },
    {
      name: '3D illustration Design With Figma',
      level: 'intermediate',
      complete: 60,
      author: 'Jhonatan Due',
    },
    {
      name: 'Web App Design With Figma',
      level: 'advance',
      complete: 20,
      author: 'Jhonatan Due',
    },
  ];
  return (
    <DashboardLayout
      meta={
        <Meta title="Omni. | Course Fast" description="Kursus pasti bisa" />
      }
    >
      <Container maxW="full" p="30px">
        <Heading fontWeight="medium" fontSize="30px">
          Course
        </Heading>
        <Tabs mt="44px">
          <TabList
            fontSize="18px"
            fontWeight="medium"
            columnGap="35px"
            borderBottom="none"
          >
            <Tab
              p="5px"
              _selected={{ color: 'primary', borderColor: 'primary' }}
              _hover={{ color: 'primary' }}
            >
              All
            </Tab>
            <Tab
              p="5px"
              _selected={{ color: 'primary', borderColor: 'primary' }}
              _hover={{ color: 'primary' }}
            >
              Active
            </Tab>
            <Tab
              p="5px"
              _selected={{ color: 'primary', borderColor: 'primary' }}
              _hover={{ color: 'primary' }}
            >
              Completed
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel px="0" pt="25px">
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  lg: 'repeat(4, 1fr)',
                }}
                columnGap="30px"
                rowGap="20px"
                mb="40px"
              >
                {courses.map((course, i) => (
                  <GridItem key={course.name + i}>
                    <CardCourseItem
                      name={course.name}
                      complete={course.complete}
                      level={course.level}
                      author={course.author}
                    />
                  </GridItem>
                ))}
              </Grid>
              <Heading
                fontWeight="medium"
                fontSize="20px"
                color="#313134"
                mb="28px"
              >
                Course Listing
              </Heading>
              <Box
                borderRadius="16px"
                bg="white"
                w="full"
                maxW="full"
                overflowX="auto"
              >
                <TableContainer pb="20px">
                  <Table variant="simple">
                    <Thead>
                      <Tr>
                        <Th>Name</Th>
                        <Th>Category</Th>
                        <Th>level</Th>
                        <Th>tools</Th>
                        <Th>lessons</Th>
                        <Th>points required</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {[
                        {
                          name: '3D Animation',
                          category: 'UI Design',
                          level: 'beginner',
                          tools: 'Cinema 4D',
                          lessons: '25 Tutorials',
                          pointRequired: 100,
                          pass: true,
                        },
                        {
                          name: 'Design Thinking',
                          category: 'UX Design',
                          level: 'intermediate',
                          tools: 'Adobe XD',
                          lessons: '25 Tutorials',
                          pointRequired: 100,
                          pass: true,
                        },
                        {
                          name: 'Machine Learning',
                          category: 'Data',
                          level: 'advance',
                          tools: 'VS Code',
                          lessons: '25 Tutorials',
                          pointRequired: 100,
                          pass: false,
                        },
                      ].map((course, i) => (
                        <Tr key={course.name + i}>
                          <Td>{course.name}</Td>
                          <Td>{course.category}</Td>
                          <Td>
                            <Text textTransform="capitalize">
                              {course.level}
                            </Text>
                          </Td>
                          <Td>{course.tools}</Td>
                          <Td>{course.lessons} Tutorial</Td>
                          <Td>
                            <Text color={course.pass ? '#4ECA8F' : '#EC6666'}>
                              {course.pointRequired} Points
                            </Text>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </DashboardLayout>
  );
}
