import { Meta, Story } from "@storybook/react";
import PosterTopTen, { PosterProps } from "./index";

export default {
  title: "Poster",
  component: PosterTopTen,

  argTypes: {},
} as Meta<PosterStoryProps>;

type PosterStoryProps = Pick<PosterProps, "num">;

export const Default: Story<PosterStoryProps> = ({ ...args }) => (
  <PosterTopTen {...args} />
);
Default.args = {
  // img: "https://thumbs.dfs.ivi.ru/storage29/contents/c/4/f3b4f712ab844ed3349bc9dede0e40.jpg",
  num: 5,
};
Default.storyName = "poster";
