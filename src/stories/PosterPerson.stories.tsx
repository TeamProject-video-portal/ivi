

import type { Meta, StoryObj } from "@storybook/react";
import PosterPerson from "../components/PosterPerson";

const meta: Meta<typeof PosterPerson> = {
  title: "PosterPerson",
  component: PosterPerson,
} as Meta<PosterPersonProps>;

type PosterPersonStoryProps = Pick<PosterPersonProps, "person">;

export const Default: Story<PosterPersonStoryProps> = ({ ...args }) => (
  <PosterPerson {...args} />
);
Default.args = {
  person: {
    id: 117,
    personLink: "https://www.kinopoisk.ru//name/37859/",
    personPicture:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/9c33caef-be28-4257-b7ed-a407698f1a32/280x420",
    personLang: [
      {
        lang: "ru",
        personName: "Леонардо ДиКаприо",
        career: "Актер,  Продюсер,  Сценарист",
        birthPlace: "Голливуд, Лос-Анджелес, Калифорния, США",
      },
      {
        lang: "en",
        personName: "Leonardo DiCaprio",
        career: null,
        birthPlace: null,
      },
    ],
    films: [
      {
        id: 3,
        name: "Волк с Уолл-стрит",
        year: 2,
        rating: 7,
        poster: "",
      },
    ],
  },
};


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
