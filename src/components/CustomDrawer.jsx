import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react';
import React from 'react';

const CustomDrawer = ({isOpen, onClose}) => {
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          backgroundColor="gray.900"
          textColor="white"
          borderBottomWidth="1px"
        >
          Basic Drawer
        </DrawerHeader>
        <DrawerBody textColor="white"  backgroundColor="gray.900">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
