import { Meta, Story } from "@storybook/react";
import PosterTopTen, { PosterProps } from "./index";
import dataOneMovie from "@/data/One_film_response_v2.json";
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
    id: 123,
    poster: {
      previewUrl: dataOneMovie.filmPoster,
      url: dataOneMovie.filmPoster,
    },
  },
};
Default.storyName = "poster";
