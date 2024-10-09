import React from "react";
import { Game, ImageURL, Platform } from "../hooks/UseGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import NoOfReviews from "./NoOfReviews";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.image.small_url} height="400px" />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.platforms} />
          <NoOfReviews no={game.number_of_user_reviews} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
