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

export type FilmLangType = {
  lang: 'ru' | 'en';
  filmName: string;
  filmDescription?: string | null;
};

export type ActorsType = {
  id: number;
  name: string;
  photo?: string;
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
  actors?: ActorsType[];
  directors?: DirectorsType[];
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
  actors?: ActorsType[];
  directors?: DirectorsType[];
};

export type PersonLangType = {
  lang: 'ru' | 'en';
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
