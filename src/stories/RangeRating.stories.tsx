import type { Meta, StoryObj } from "@storybook/react";
import RangeRating from "../components/RangeRating";

const meta: Meta<typeof RangeRating> = {
  title: "RangeRating",
  component: RangeRating,
  argTypes: {},
} as Meta<RangeRatingProps>;

type RangeRatingStoryProps = Pick<RangeRatingProps, "rtl" | "ratingMin" | "ratingMax">;

export const Default: Story<RangeRatingStoryProps> = ({ ...args }) => <RangeRating {...args} />;

Default.args = {
  rtl: false,
  ratingMin: 7,
  ratingMax: 10,
};

export default meta;
type Story = StoryObj<typeof RangeRating>;

export const Rating: Story = {};
