import {
  Container,
  useDisclosure,
  Button,
  ButtonGroup,
  Box,
  HStack,
} from "@chakra-ui/react";
import SideBar from "./components/SideBar/SideBar";
import "./styles.css";
import CustomDrawer from "./components/CustomDrawer";
import { ArrowRightIcon } from "@chakra-ui/icons";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box style={{display:"flex"}} alignItems="center" backgroundColor="gray.500" height="100vh" width="20px" colorScheme="gray" onClick={onOpen}>
        <ArrowRightIcon/>
      </Box>
      <CustomDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default App;
