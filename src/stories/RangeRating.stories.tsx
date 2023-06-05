import type { Meta, Story } from "@storybook/react";
import RangeRating, { RangeRatingProps } from "../components/RangeRating";

export default {
  title: "RangeRating",
  component: RangeRating,
  argTypes: {},
} as Meta<RangeRatingProps>;

type RangeRatingStoryProps = Pick<
  RangeRatingProps,
  "rtl" | "ratingMin" | "ratingMax"
>;

export const Default: Story<RangeRatingStoryProps> = ({ ...args }) => (
  <RangeRating {...args} />
);

Default.args = {
  rtl: false,
  ratingMin: 7,
  ratingMax: 10,
};

Default.storyName = "RangeRating";
