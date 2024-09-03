import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Link to="/">
        <Image
          src={logo}
          boxSize={{ base: "40px", md: "60px" }}
          objectFit="cover"
        />
      </Link>
      <HStack>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default Navbar;
