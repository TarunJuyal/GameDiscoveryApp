import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../models";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery: { platform, genre } }: Props) => {
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
