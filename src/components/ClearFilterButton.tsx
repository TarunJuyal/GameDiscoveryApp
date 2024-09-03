import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const ClearFilterButton = () => {
  const { genre, platform, searchText, sortOrder } = useGameQueryStore(
    (s) => s.gameQuery
  );
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return genre || platform || sortOrder ? (
    <Tag
      size="sm"
      borderRadius="full"
      onClick={searchText ? () => setSearchText(searchText) : undefined}
    >
      <TagLabel>Reset Filters</TagLabel>
      <TagCloseButton />
    </Tag>
  ) : null;
};

export default ClearFilterButton;
