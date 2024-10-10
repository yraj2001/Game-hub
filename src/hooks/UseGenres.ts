import UseData from "./UseData";

interface Image {
  icon_url: string;
  original_url: string;
}

export interface Genre {
  id: number;
  name: string;
  image: Image;
}

const UseGenres = () => UseData<Genre>("genres/");

export default UseGenres;
