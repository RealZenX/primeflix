export type TV = {
  media_type?: 'tv';
  id: number;
  episodeId: string;
  name: string;
  cover: string;
  poster_path: string;
  backdrop_path: string;
  releaseDate: string;
  overview: string;
  tagline: string;
  vote_average: number;
  runtime: number;
  number_of_seasons: number;
  number_of_episodes: number;
  first_air_date: string;
  genres: Genre[];
  casts: Cast[];
  seasons: Season[];
  url: string;
};

type Genre = {
  id: string;
  name: string;
};

type Cast = {
  id: string;
  name: string;
}

type Season = {
  id: number; 
  name: string; 
  air_date: string; 
  episode_count: number;
  overview: string; 
  poster_path: string; 
  season_number: number; 
  vote_average: number; 
  season: number;
  episodes: Episode[];
};

export type Episode = {
  [x: string]: any;
  id: number; 
  episode: number;
  releaseDate: string;
  title: string; 
  description: string; 
  img: {
    mobile: string;
  }
  url: string;
};
