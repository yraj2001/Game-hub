import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import UseGenres from "../hooks/UseGenres";

const GenreList = () => {
  const { data } = UseGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={genre.image.icon_url} />
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
