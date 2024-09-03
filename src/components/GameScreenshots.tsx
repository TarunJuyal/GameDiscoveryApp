import { Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <>
      <Text fontSize="25px" color="gray.200" marginBottom={3}>
        Game Screenshots
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {data?.results.map((file) => (
          <Image key={file.id} src={file.image} height="100%" />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
