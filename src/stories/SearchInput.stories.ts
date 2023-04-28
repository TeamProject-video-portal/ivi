import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from '../components/SearchInput';
import cl from './searchinput.module.scss';

const meta: Meta<typeof SearchInput> = {
  title: 'SearchInput',
  component: SearchInput,
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const SearchProducers: Story = {
  args: {
    className: cl.searchinput,
    placeholder: 'Режиссёры',
  },
};
