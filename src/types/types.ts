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
  fullName: string;
};

export type FilmLangType = {
  filmName: string;
  filmTime: string;
  lang?: 'ru' | 'en';
};

export type ActorsType = {
  id: number;
  name: string;
};

export interface IMovie {
  id: number;
  filmLink: string;
  filmTrailer: string;
  filmDate: string;
  filmGrade: string; // rating
  filmTotalGrade: string; // score
  filmPicture: string;
  filmLang: FilmLangType[];
  filmName: string;
  filmTime: string;
  genres: GenresType[];
  countries: CountriesType[];
  directors: DirectorsType[];
  actors: ActorsType[];
}

export type ActorFilmsType = {
  id: number;
  name: string;
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

export interface IUser {
  userId: number;
  name?: string;
  email?: string;
  userRole?: string;
}

export interface IMovies {}
export interface IFilters {}
