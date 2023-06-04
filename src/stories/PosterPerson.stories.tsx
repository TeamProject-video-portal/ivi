import type { Meta, StoryObj } from "@storybook/react";
import PosterPerson from "../components/PosterPerson";

const meta: Meta<typeof PosterPerson> = {
  title: "PosterPerson",
  component: PosterPerson,
};

export default meta;
type Story = StoryObj<typeof PosterPerson>;

export const personForSlider: Story = {
  args: {
    person: {
      id: 21495,
      personLink: "https://www.kinopoisk.ru/name/21495/",
      personPicture: "https://kinopoiskapiunofficial.tech/images/actor_posters/kp/21495.jpg",
      personGender: "MALE",
      height: 183,
      age: 48,
      birthDate: "1974-01-30",
      personLang: [
        {
          lang: "ru",
          personName: "Кристиан Бэйл",
          career: "Актер, Продюсер",
          birthPlace: "Хаверфордвест, Пембрукшир, Уэльс, Великобритания",
        },
        {
          lang: "en",
          personName: "Christian Bale",
          career: null,
          birthPlace: null,
        },
      ],
      films: [
        {
          id: 309,
          name: "Эквилибриум",
          year: 2002,
          rating: 7.9,
          poster: "https://kinopoiskapiunofficial.tech/images/posters/kp/309.jpg",
        },
      ],
    },
  },
};
