import { Text } from "@chakra-ui/react";
import UseGames from "../hooks/UseGames";

const GameGrid = () => {
  const { games, error } = UseGames();
  console.log(error);
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
