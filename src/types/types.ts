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
  photo?: string;
};

export type ActorsType = {
  id: number;
  name: string;
  photo?: string;
};

export type FilmLangType = {
  lang: "ru" | "en";
  filmName: string;
  filmDescription?: string | null;
};

export interface ISimpleMovie {
  id: number;
  filmPoster: string;
  filmGrade: number;
  filmYear: number;
  filmTime: number;
  filmAge: string;
  filmLang: FilmLangType[];
  genres: GenresType[];
  countries: CountriesType[];
  actors?: ActorsType[];
  directors?: DirectorsType[];
}
export interface IMovie extends ISimpleMovie {
  filmType: string;
  filmLink: string;
  filmTrailer: string;
  filmTotalGrade: number;
  filmR: string;
  similarFilms: ISimpleMovie[];
}

export type PersonLangType = {
  lang: "ru" | "en";
  personName: string;
  career?: string | null;
  birthPlace?: string | null;
};

export type PersonFilmsType = {
  id: number;
  name: string;
  year: number;
  rating: number;
  poster: string;
};
export interface IPerson {
  id: number;
  personLink: string;
  personPicture: string;
  personGender?: string;
  personLang: PersonLangType[];
  height?: number;
  age?: number;
  birthDate?: string;
  films: PersonFilmsType[];
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

export interface IFilters {}

export type BannerType = {
  id: number;
  logo: string;
  poster: string;
  trailer: string;
  name: string;
};

export type nameType = {
  name: string;
};

export type PosterKPType = {
  previewUrl: string;
  url: string;
};

export type RaitingKPType = {
  await: null | number;
  filmCritics: number;
  imdb: number;
  kp: number;
  russianFilmCritics: number;
};

export type ResponseTopMovieKPType = {
  id: number;
  poster: PosterKPType;
};

export type FilterRangeType = [number, number];

export type SortType = "SCORE" | "RATING" | "DATE" | "TITLE";
