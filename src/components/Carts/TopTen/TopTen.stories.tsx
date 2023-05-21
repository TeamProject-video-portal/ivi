import { Meta, Story } from "@storybook/react";
import PosterTopTen, { PosterProps } from "./index";

export default {
  title: "Poster",
  component: PosterTopTen,

  argTypes: {},
} as Meta<PosterStoryProps>;

type PosterStoryProps = Pick<PosterProps, "num" | "film">;

export const Default: Story<PosterStoryProps> = ({ ...args }) => (
  <PosterTopTen {...args} />
);
Default.args = {
  num: 5,
  film: {
    id: 361,
    filmPoster: "https://kinopoiskapiunofficial.tech/images/posters/kp/361.jpg",
    filmGrade: 8.7,
    filmYear: 1999,
    filmTime: 139,
    filmAge: "18",
    filmLang: [
      {
        lang: "ru",
        filmName: "Бойцовский клуб",
      },
      {
        lang: "en",
        filmName: "Fight Club",
      },
    ],
    genres: [
      {
        id: 1,
        name: "триллер",
      },
    ],
    countries: [
      {
        id: 1,
        name: "США",
      },
      {
        id: 4,
        name: "Германия",
      },
    ],
  },
};
Default.storyName = "poster";
