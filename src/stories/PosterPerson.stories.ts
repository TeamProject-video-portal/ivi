import type { Meta, StoryObj } from '@storybook/react';
import PosterPerson from '../components/PosterPerson';

const meta: Meta<typeof PosterPerson> = {
  title: 'PosterPerson',
  component: PosterPerson,
};

export default meta;
type Story = StoryObj<typeof PosterPerson>;

export const personForSlider: Story = {};
