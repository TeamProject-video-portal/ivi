export const genresIcons = [
  { id: 1, title: "аниме", icon: "genres-icon_1" },
  { id: 2, title: "биография", icon: "genres-icon_2" },
  { id: 3, title: "боевик", icon: "genres-icon_3" },
  { id: 4, title: "вестерн", icon: "genres-icon_4" },
  { id: 5, title: "военный", icon: "genres-icon_5" },
  { id: 6, title: "детектив", icon: "genres-icon_6" },
  { id: 7, title: "детский", icon: "genres-icon_7" },
  { id: 8, title: "документальный", icon: "genres-icon_8" },
  { id: 9, title: "драма", icon: "genres-icon_9" },
  { id: 10, title: "игра", icon: "genres-icon_10" },
  { id: 11, title: "история", icon: "genres-icon_11" },
  { id: 12, title: "комедия", icon: "genres-icon_12" },
  { id: 13, title: "концерт", icon: "genres-icon_13" },
  { id: 14, title: "короткометражка", icon: "genres-icon_14" },
  { id: 15, title: "криминал", icon: "genres-icon_15" },
  { id: 16, title: "мелодрама", icon: "genres-icon_16" },
  { id: 17, title: "музыкальный", icon: "genres-icon_17" },
  { id: 18, title: "мультфильм", icon: "genres-icon_18" },
  { id: 19, title: "мюзикл", icon: "genres-icon_19" },
  { id: 20, title: "новости", icon: "genres-icon_20" },
  { id: 21, title: "приключения", icon: "genres-icon_21" },
  { id: 22, title: "реальное ТВ", icon: "genres-icon_22" },
  { id: 23, title: "семейный", icon: "genres-icon_23" },
  { id: 24, title: "спорт", icon: "genres-icon_24" },
  { id: 25, title: "ток-шоу", icon: "genres-icon_25" },
  { id: 26, title: "триллер", icon: "genres-icon_26" },
  { id: 27, title: "ужасы", icon: "genres-icon_27" },
  { id: 28, title: "фантастика", icon: "genres-icon_28" },
  { id: 29, title: "фильм-нуар", icon: "genres-icon_29" },
  { id: 30, title: "фэнтези", icon: "genres-icon_30" },
  { id: 31, title: "церемония", icon: "genres-icon_31" },
];

export const filtersTitle = [
  { title: "genres", value: "Жанры" },
  { title: "countries", value: "Страны" },
  { title: "years", value: "Годы" },
  { title: "producers", value: "Режиссёры" },
  { title: "actors", value: "Актёры" },
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
