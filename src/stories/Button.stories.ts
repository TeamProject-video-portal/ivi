import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Purple: Story = {
  args: {
    color: 'purple',
    children: 'button',
  },
};

export const Pink: Story = {
  args: {
    color: 'pink',
    children: 'button',
  },
};

export const Darkbluegrey: Story = {
  args: {
    color: 'darkbluegrey',
    children: 'button',
  },
};
