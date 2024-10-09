import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

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

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const UseGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("games/", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // apiClient
    //   .get("platforms/", { signal: controller.signal })
    //   .then((res) => console.log(res.data.results))
    //   .catch((err) => {
    //     if (err instanceof CanceledError) return;
    //     setError(err.message);
    //   });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default UseGames;

// https://www.giantbomb.com/api/platform/[guid]/?api_key=[YOUR API KEY]
