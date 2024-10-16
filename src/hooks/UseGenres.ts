import generes from "../data/Genres";
import UseData from "./UseData";

interface Image {
  icon_url: string;
  original_url: string;
}

export interface Genre {
  id: number;
  name: string;
  image: Image;
  guid: string;
}

// const UseGenres = () => UseData<Genre>("genres/");

const UseGenres = () => ({ data: generes, isLoading: false, error: null });

export default UseGenres;
