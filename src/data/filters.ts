export const genres = [
  { id: 1, title: 'Аниме', icon: 'genres-icon_1' },
  { id: 2, title: 'Биографии', icon: 'genres-icon_2' },
  { id: 3, title: 'Боевики', icon: 'genres-icon_3' },
  { id: 4, title: 'Вестерны', icon: 'genres-icon_4' },
  { id: 5, title: 'Военные', icon: 'genres-icon_5' },
  { id: 6, title: 'Детективы', icon: 'genres-icon_6' },
  { id: 7, title: 'Детские', icon: 'genres-icon_7' },
  { id: 8, title: 'Документальные', icon: 'genres-icon_8' },
  { id: 9, title: 'Драмы', icon: 'genres-icon_9' },
  { id: 10, title: 'Игры', icon: 'genres-icon_10' },
  { id: 11, title: 'Исторические', icon: 'genres-icon_11' },
  { id: 12, title: 'Комедии', icon: 'genres-icon_12' },
  { id: 13, title: 'Концерты', icon: 'genres-icon_13' },
  { id: 14, title: 'Короткометражки', icon: 'genres-icon_14' },
  { id: 15, title: 'Криминал', icon: 'genres-icon_15' },
  { id: 16, title: 'Мелодрамы', icon: 'genres-icon_16' },
  { id: 17, title: 'Музыкальные', icon: 'genres-icon_17' },
  { id: 18, title: 'Мультфильмы', icon: 'genres-icon_18' },
  { id: 19, title: 'Мюзиклы', icon: 'genres-icon_19' },
  { id: 20, title: 'Новости', icon: 'genres-icon_20' },
  { id: 21, title: 'Приключения', icon: 'genres-icon_21' },
  { id: 22, title: 'Реальное ТВ', icon: 'genres-icon_22' },
  { id: 23, title: 'Семейные', icon: 'genres-icon_23' },
  { id: 24, title: 'Спортивные', icon: 'genres-icon_24' },
  { id: 25, title: 'Ток-шоу', icon: 'genres-icon_25' },
  { id: 26, title: 'Триллеры', icon: 'genres-icon_26' },
  { id: 27, title: 'Ужасы', icon: 'genres-icon_27' },
  { id: 28, title: 'Фантастика', icon: 'genres-icon_28' },
  { id: 29, title: 'Фильмы-нуар', icon: 'genres-icon_29' },
  { id: 30, title: 'Фэнтези', icon: 'genres-icon_30' },
  { id: 31, title: 'Церемонии', icon: 'genres-icon_31' },
];

export const filtersTitle = [
  { title: 'genres', value: 'Жанры' },
  { title: 'countries', value: 'Страны' },
  { title: 'years', value: 'Годы' },
  { title: 'producers', value: 'Режиссёры' },
  { title: 'actors', value: 'Актёры' },
];

export interface FiltersState {
  genres: string[];
  countries: string[];
  years: number[];
  ratingMin: number;
  ratingMax: number;
  scoreMin: number;
  scoreMax: number;
}
