export type GenresType = {
  id: number;
  name: string;
};

export type CountriesType = {
  id: number;
  name: string;
};

export type DirectorsType = {
  id: number;
  name: string;
  photo: string;
};

export type FilmLangType = {
  lang?: "ru" | "en";
  filmName: string;
  filmDescription: string;
};

export type ActorsType = {
  id: number;
  name: string;
  photo: string;
};

export interface IMovie {
  id: number;
  filmType: string;
  filmLink: string;
  filmTrailer: string;
  filmYear: number;
  filmTime: number;
  filmGrade: number;
  filmTotalGrade: number;
  filmR: string;
  filmAge: string;
  filmPoster: string;
  filmLang: FilmLangType[];
  genres: GenresType[];
  countries: CountriesType[];
  directors: DirectorsType[];
  actors: ActorsType[];
  similarFilms: SimilarFilm[];
}

export type SimilarFilm = {
  id: number;
  filmPoster: string;
  filmGrade: number;
  filmYear: number;
  filmTime: number;
  filmAge: string;
  filmLang: FilmLangType[];
  genres: GenresType[];
  countries: CountriesType[];
  actors: ActorsType[];
  directors: DirectorsType[];
};

export type ActorFilmsType = {
  id: number;
  name: string;
};

export type SearchFilmsType = {
  id: number;
  filmPoster: string;
  filmGrade: number;
  filmYear: number;
  filmTime: number;
  filmAge: string;
  filmLang: FilmLangType[];
  genres: GenresType[];
  countries: CountriesType[];
};

export type ActorLangType = {
  id: number;
  actorId: number;
  lang: string;
  actorName: string;
  career?: string;
  birthPlace?: string;
  birthDate?: string;
  height?: string;
};

export interface IPerson {
  id: number;
  actorLink: string;
  actorPicture: string;
  actorLang: ActorLangType[];
  films: ActorFilmsType[];
}

export type ResponseError = {
  message: string;
};

export interface IMovies {}
export interface IFilters {}
