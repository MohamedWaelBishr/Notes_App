import React from 'react';
import { Box, HStack, VStack } from "@chakra-ui/react";
const SideBar = () => {
  return (
    <VStack
      spacing={4}
      align="center"
    >
      <Box h="40px" w="40px" bg="yellow.200">
        1
      </Box>
      <Box h="40px" w="40px" bg="tomato">
        2
      </Box>
      <Box h="40px" w="40px" bg="pink.100">
        3
      </Box>
    </VStack>
  );
};

export default SideBar;
