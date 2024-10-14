import { GameQuery } from "../App";
import UseData from "./UseData";
import { Genre } from "./UseGenres";
import { Platform } from "./UsePlatforms";

export interface ImageURL {
  small_url: string;
}

export interface Platforms {
  id: number;
  name: string;
  abbreviation: string;
}

export interface Game {
  id: number;
  name: string;
  image: ImageURL;
  platforms: Platforms[];
  number_of_user_reviews: number;
}

const UseGames = (gameQuery: GameQuery) => {
  // Construct the filter string based on selected genre and platform
  const filters = [];
  if (gameQuery.genre?.guid) filters.push(`genres:${gameQuery.genre.id}`);
  if (gameQuery.platform?.id)
    filters.push(`platforms:${gameQuery.platform.id}`);

  const filterString = filters.length > 0 ? filters.join(",") : undefined;
  // console.log(filters);

  return UseData<Game>(
    "games/",
    {
      params: {
        filter: filterString, // Apply filters as a single string
      },
    },
    [gameQuery] // Track dependencies
  );
};

export default UseGames;
