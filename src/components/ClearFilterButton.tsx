import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const ClearFilterButton = () => {
  const { genre, platform, searchText, sortOrder } = useGameQueryStore(
    (s) => s.gameQuery
  );
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const clear = () => {
    searchText ? setSearchText(searchText) : setSearchText("");
  };

  return genre || platform || sortOrder ? (
    <Tag size="sm" borderRadius="full">
      <TagLabel>Reset Filters</TagLabel>
      <TagCloseButton onClick={clear} />
    </Tag>
  ) : null;
};

export default ClearFilterButton;
