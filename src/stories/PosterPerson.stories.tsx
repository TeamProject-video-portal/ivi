import type { Meta, Story } from "@storybook/react";
import PosterPerson, { PosterPersonProps } from "../components/PosterPerson";

export default {
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

Default.storyName = "PosterPerson";
