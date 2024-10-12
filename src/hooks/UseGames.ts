import UseData from "./UseData";
import { Genre } from "./UseGenres";

export interface ImageURL {
  small_url: string;
}

export interface Platform {
  id: number;
  name: string;
  abbreviation: string;
}

export interface Game {
  id: number;
  name: string;
  image: ImageURL;
  platforms: Platform[];
  number_of_user_reviews: number;
}

const UseGames = (selectedGenre: Genre | null) =>
  UseData<Game>(
    "games/",
    {
      params: selectedGenre ? { filter: `genres:${selectedGenre.guid}` } : {},
    },
    [selectedGenre?.guid]
  );

export default UseGames;

// https://www.giantbomb.com/api/platform/[guid]/?api_key=[YOUR API KEY]
