import { HStack, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import GenreDrawer from "./GenreDrawer";
import { GameQuery } from "../models";

interface Props {
  onSearch: (searchText: string) => void;
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

const Navbar = ({ onSearch, gameQuery, setGameQuery }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <HStack>
        <Image src={logo} boxSize={{ base: "40px", md: "60px" }} />
        <Show below="lg">
          <GenreDrawer gameQuery={gameQuery} setGameQuery={setGameQuery} />
        </Show>
      </HStack>
      <HStack>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default Navbar;
