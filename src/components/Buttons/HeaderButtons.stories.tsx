import { Meta, Story } from "@storybook/react";
import { HeaderButton, HeaderButtonProps } from "./HeaderButton";

export default {
  title: "Buttons/HeaderButton",
  component: HeaderButton,

  argTypes: {
    // children: {
    //   type: "string",
    //   name: "children",
    //   defaultValue: "EN",
    //   options: ["EN", "≥≤"],
    //   control: {
    //     type: "select",
    //   },
    // },
    type: {
      type: "string",
      name: "type",
      description: "Button for change language",
      defaultValue: "lang",
      options: ["lang", "notification"],
      control: { type: "radio" },
    },
  },
} as Meta<HeaderButtonProps>;

type HeaderButtonStoryProps = Pick<
  HeaderButtonProps,
  "children" | "type" | "onClick"
>;

export const Default: Story<HeaderButtonStoryProps> = ({ ...args }) => (
  <HeaderButton {...args} />
);

Default.args = {
  children: "en",
  type: "lang",
};
Default.storyName = "Button";
