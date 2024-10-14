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

const UseGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  // Construct the filter string based on selected genre and platform
  const filters = [];
  if (selectedGenre?.guid) filters.push(`genres:${selectedGenre.id}`);
  if (selectedPlatform?.id) filters.push(`platforms:${selectedPlatform.id}`);

  const filterString = filters.length > 0 ? filters.join(",") : undefined;
  console.log(filters);

  return UseData<Game>(
    "games/",
    {
      params: {
        filter: filterString, // Apply filters as a single string
      },
    },
    [selectedGenre?.id, selectedPlatform?.id] // Track dependencies
  );
};

export default UseGames;
