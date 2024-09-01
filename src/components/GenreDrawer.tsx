import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { GameQuery } from "../models";
import GenreList from "./GenreList";
import { MdMenu } from "react-icons/md";

interface Props {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

const GenreDrawer = ({ setGameQuery, gameQuery }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Icon
        ref={btnRef}
        color="teal"
        onClick={onOpen}
        children={<MdMenu />}
        boxSize={{ base: "40px", md: "60px" }}
        marginTop={3}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay marginBottom={5} />
        <DrawerContent padding={5} overflowY="scroll">
          <DrawerCloseButton />
          <GenreList
            onSelectGenre={(genre) => {
              setGameQuery({ ...gameQuery, genre });
              onClose();
            }}
            selectedGenre={gameQuery.genre}
          />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GenreDrawer;
