import UseData from "./UseData";

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

const UseGames = () => UseData<Game>("games/");

export default UseGames;

// https://www.giantbomb.com/api/platform/[guid]/?api_key=[YOUR API KEY]
