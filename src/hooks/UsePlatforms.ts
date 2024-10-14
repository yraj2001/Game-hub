import UseData from "./UseData";

export interface Platform {
  name: string;
  id: number;
  guid: string;
}

const UsePlatforms = () => UseData<Platform>("platforms/");

export default UsePlatforms;
