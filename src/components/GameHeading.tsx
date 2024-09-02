import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genre = useGameQueryStore((s) => s.gameQuery.genre);
  const platform = useGameQueryStore((s) => s.gameQuery.platform);
  const heading =
    platform || genre
      ? `${platform?.name || ""} ${genre?.name || ""} Games`
      : "All Games";
  return (
    <Heading marginBottom={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
