import { Meta, Story } from "@storybook/react";
import CardMovie, { CartProps } from "./index";
import img from "../../../images/banner__foto.jpeg";
export default {
  title: "CardMovie",
  component: CardMovie,
  argTypes: {
    type: {
      type: "string",
      name: "View",
      description: "View of cart",
      defaultValue: "detailed",
      options: ["detailed", "summary"],
      control: { type: "radio" },
    },
  },
} as Meta<CartStoryProps>;

type CartStoryProps = Pick<CartProps, "title" | "text" | "type" | "img">;

export const Default: Story<CartStoryProps> = ({ ...args }) => (
  <CardMovie {...args} />
);

Default.args = {
  title: "1. Возвращение в Простоквашино. Часть 1",
  text: "В жизни дяди Федора произошли серьезные перемены. У него появилась маленькая сестренка – Вера Павловна. И потому мама и папа уделяют сыну совсем мало внимания. А ему, между тем, требуется поддержка родителей. Дядя Федор получает известие из Простоквашино. На ферме Матроскина завелся таинственный грызун, который вывел из строя систему электроснабжения. Холодильник перестал работать, все молоко скисло. А Шарик вместо того, чтобы охранять дом, стал модным блогером. Дядя Федор спешит на помощь.",
  type: "detailed",
  img: img,
};

Default.storyName = "cart";
